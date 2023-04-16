import { useEffect, useState } from 'react';
import { getPerson } from '../../api';
import { PeopleType } from '../../types';
import CustomLoader from '../Loader/Loader';
import './ModalCard.scss';

type TModalInfo = {
  personId: number;
};

function ModalInfo({ personId }: TModalInfo) {
  const [retrievedData, setRetrievedData] = useState<Partial<PeopleType>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPerson(personId).then((data) => {
      setRetrievedData(data);
      setIsLoading(false);
    });
  }, [personId]);

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="modal-info">
          <img
            className="info-photo"
            src={`https://json-server-6d972uqd4-nkp1sss.vercel.app/${retrievedData.photo}`}
            alt="picture"
          />
          <p className="info-name">{retrievedData.name}</p>
          <p className="info-age">{retrievedData.age} years old</p>
          <p className="info-profession">Work: {retrievedData.profession}</p>
          <p className="info-description">{retrievedData.description}</p>
        </div>
      )}
    </>
  );
}

export default ModalInfo;
