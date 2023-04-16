import './ModalCard.scss';

import { useGetPersonQuery } from '../../redux/slices/cardsAPI';
import CustomLoader from '../Loader/Loader';

type TModalInfo = {
  personId: number;
};

function ModalInfo({ personId }: TModalInfo) {
  const { data, isFetching } = useGetPersonQuery(personId);

  return (
    <>
      {isFetching ? (
        <CustomLoader />
      ) : (
        <div className="modal-info">
          <img
            className="info-photo"
            src={`https://json-server-6d972uqd4-nkp1sss.vercel.app/${data.photo}`}
            alt="picture"
          />
          <p className="info-name">{data.name}</p>
          <p className="info-age">{data.age} years old</p>
          <p className="info-profession">Work: {data.profession}</p>
          <p className="info-description">{data.description}</p>
        </div>
      )}
    </>
  );
}

export default ModalInfo;
