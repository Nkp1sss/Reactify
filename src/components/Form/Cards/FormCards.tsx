import './FormCards.scss';

import FormCard from '../Card/FormCard';
import { TFormCard } from '../../../types/component';

type TFormCardsProps = { formCards: TFormCard[] };

function FormCards({ formCards }: TFormCardsProps) {
  return (
    <div className="form-cards">
      {formCards.map((card, i) => (
        <FormCard key={i} {...card} />
      ))}
    </div>
  );
}

export default FormCards;
