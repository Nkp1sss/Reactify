import React from 'react';

import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <div className="container">
          <SearchBar />
          <Card />
        </div>
      </main>
    );
  }
}

export default Home;
