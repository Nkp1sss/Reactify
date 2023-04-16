import { useEffect, useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import CustomLoader from '../../components/Loader/Loader';
import { PeopleType } from '../../types';
import { getPeoples } from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeValue } from '../../redux/slices/search';

function Home() {
  const searchValue = useAppSelector((store) => store.search.searchValue);
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState<PeopleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPeoples(searchValue).then((data) => {
      setCards(data);
      setIsLoading(false);
    });
  }, [searchValue]);

  const changeSearchValue = (value: string) => dispatch(changeValue(value));

  return (
    <main className="home">
      <div className="container">
        <SearchBar changeSearchValue={changeSearchValue} />
        {isLoading ? <CustomLoader /> : <Cards cards={cards} />}
      </div>
    </main>
  );
}

export default Home;
