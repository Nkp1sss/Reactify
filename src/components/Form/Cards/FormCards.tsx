import './FormCards.scss';

import FormCard from '../Card/FormCard';
import { useAppSelector } from '../../../hooks';

function FormCards() {
  const cards = useAppSelector((state) => state.formCards.cards);

  return (
    <div className="form-cards" data-testid="form-cards">
      {cards.map((card, i) => (
        <FormCard key={i} {...card} />
      ))}
    </div>
  );
}

export default FormCards;
