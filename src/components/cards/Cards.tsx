import './Cards.scss';

import React from 'react';

import peoples from '../../data/data';
import Card from '../Card/Card';

class Cards extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      peoples,
    };
  }

  render() {
    return (
      <div className="cards">
        {peoples.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
    );
  }
}

export default Cards;
