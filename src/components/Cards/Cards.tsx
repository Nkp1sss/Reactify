import './Cards.scss';

import Card from './Card/Card';
import CustomLoader from '../Loader/Loader';
import { useAppSelector } from '../../hooks';
import { useGetPeoplesQuery } from '../../redux/slices/cardsAPI';
import { PeopleType } from '../../types';

function Cards() {
  const searchValue = useAppSelector((store) => store.search.searchValue);
  const { data, isFetching } = useGetPeoplesQuery(searchValue);

  return (
    <div className="cards">
      {isFetching ? (
        <CustomLoader />
      ) : (
        data.map((person: PeopleType) => <Card key={person.id} {...person} />)
      )}
    </div>
  );
}

export default Cards;
