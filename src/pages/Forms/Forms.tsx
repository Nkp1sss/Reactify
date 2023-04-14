import { useState } from 'react';

import Form from '../../components/Form/Form';
import FormCards from '../../components/Form/Cards/FormCards';
import { TFormCard } from '../../types/component';

function Forms() {
  const [formCards, setFormCards] = useState<TFormCard[]>([]);

  function addCard(card: TFormCard) {
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
