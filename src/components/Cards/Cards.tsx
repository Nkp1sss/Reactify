import './Cards.scss';

import { TPeople } from '../../types/component';
import Card from '../Card/Card';

type TCards = {
  cards: TPeople[];
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
