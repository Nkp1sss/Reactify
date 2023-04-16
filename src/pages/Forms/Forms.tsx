import { useState } from 'react';

import Form from '../../components/Form/Form';
import FormCards from '../../components/Form/Cards/FormCards';
import { FormCardType } from '../../types';

function Forms() {
  const [formCards, setFormCards] = useState<FormCardType[]>([]);

  function addCard(card: FormCardType) {
    setFormCards([...formCards, card]);
  }

  return (
    <main className="forms">
      <div className="container">
        <Form addCard={addCard} />
        <FormCards formCards={formCards} />
      </div>
    </main>
  );
}

export default Forms;
