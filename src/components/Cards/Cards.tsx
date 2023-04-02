import './Cards.scss';

import peoples from '../../data/data';
import Card from '../Card/Card';

function Cards() {
  return (
    <div className="cards">
      {peoples.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  );
}

export default Cards;
