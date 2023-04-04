import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';

import { useEffect, useState } from 'react';

import { TPeople } from '../../types/component';
import { getPeoples } from '../../api/api';

function Home() {
  const [searchValue, setSearchValue] = useState(() => localStorage.getItem('savedValue') || '');
  const [cards, setCards] = useState<TPeople[]>([]);

  useEffect(() => {
    getPeoples(searchValue).then((data) => setCards(data));
  }, [searchValue]);

  return (
    <main className="home">
      <div className="container">
        <SearchBar changeSearchValue={(value: string) => setSearchValue(value)} />
        <Cards cards={cards} />
      </div>
    </main>
  );
}

export default Home;
