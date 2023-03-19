import React from 'react';

import Cards from '../components/Cards/Cards';
import SearchBar from '../components/SearchBar/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <div className="container">
          <SearchBar />
          <Cards />
        </div>
      </main>
    );
  }
}

export default Home;
