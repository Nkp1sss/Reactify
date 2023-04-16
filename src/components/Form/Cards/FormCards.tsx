import './FormCards.scss';

import FormCard from '../Card/FormCard';
import { FormCardType } from '../../../types';

type TFormCardsProps = { formCards: FormCardType[] };

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
