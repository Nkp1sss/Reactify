import './Cards.scss';

import { PeopleType } from '../../types';
import Card from './Card/Card';

type TCards = {
  cards: PeopleType[];
};

function Cards(props: TCards) {
  return (
    <div className="cards">
      {props.cards.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  );
}

export default Cards;
