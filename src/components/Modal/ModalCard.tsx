import { useEffect, useState } from 'react';
import { getPerson } from '../../api';
import { PeopleType } from '../../types';
import CustomLoader from '../Loader/Loader';
import './ModalCard.scss';

type TModalInfo = {
  personId: number;
};

function ModalInfo({ personId }: TModalInfo) {
  // инициализировал просто рандомными данными, чтобы ts не ругался
  const [retrievedData, setRetrievedData] = useState<PeopleType>({
    id: 1,
    name: 'name',
    profession: 'profession',
    company: 'company',
    age: 1,
    instagram: 'instagram',
    twitter: 'twitter',
    photo: 'photo',
    description: 'description',
  });
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
