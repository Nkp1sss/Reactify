import './FormCards.scss';

import React from 'react';

import FormCard from '../Card/FormCard';
import { TFormCard } from '../../../types/component';

type TFormProps = { formCards: TFormCard[] };

class FormCards extends React.Component<TFormProps> {
  constructor(props: TFormProps) {
    super(props);
  }

  render() {
    return (
      <div className="form-cards">
        {this.props.formCards.map((card, i) => (
          <FormCard key={i} {...card} />
        ))}
      </div>
    );
  }
}

export default FormCards;
