import React from 'react';

import Cards from '../components/cards/Cards';
import SearchBar from '../components/SearchBar';

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
