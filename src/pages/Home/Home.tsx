import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

function Home() {
  return (
    <main className="home">
      <div className="container">
        <SearchBar />
        <Cards />
      </div>
    </main>
  );
}

export default Home;
