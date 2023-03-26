import React from 'react';

import Form from '../../components/Form/Form';
import FormCards from '../../components/Form/Cards/FormCards';
import { TFormCard } from '../../types/component';

type TFormProps = { temp?: string };
type TFormState = { formCards: TFormCard[] };

class Forms extends React.Component<TFormProps, TFormState> {
  constructor(props: TFormProps) {
    super(props);
    this.state = {
      formCards: [],
    };
  }

  addCard(card: TFormCard) {
    this.setState((prevState: TFormState) => ({
      formCards: [...prevState.formCards, card],
    }));
  }

  render() {
    return (
      <main className="forms">
        <div className="container">
          <Form addCard={this.addCard.bind(this)} />
          <FormCards formCards={this.state.formCards} />
        </div>
      </main>
    );
  }
}

export default Forms;
