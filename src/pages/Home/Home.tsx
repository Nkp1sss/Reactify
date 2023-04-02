import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';

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
