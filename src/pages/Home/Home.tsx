import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import CustomLoader from '../../components/Loader/Loader';

import { useEffect, useState } from 'react';

import { TPeople } from '../../types/component';
import { getPeoples } from '../../api/api';

function Home() {
  const [searchValue, setSearchValue] = useState(() => localStorage.getItem('savedValue') || '');
  const [cards, setCards] = useState<TPeople[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPeoples(searchValue).then((data) => {
      setCards(data);
      setIsLoading(false);
    });
  }, [searchValue]);

  return (
    <main className="home">
      <div className="container">
        <SearchBar changeSearchValue={(value: string) => setSearchValue(value)} />
        {isLoading ? <CustomLoader /> : <Cards cards={cards} />}
      </div>
    </main>
  );
}

export default Home;
