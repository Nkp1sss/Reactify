import './FormCards.scss';

import React from 'react';

import FormCard from '../Card/FormCard';

class FormCards extends React.Component {
  render() {
    return (
      <div className="form-cards">
        <FormCard />
        <FormCard />
        <FormCard />
        {/* {peoples.map((person) => (
          <Card key={person.id} {...person} />
        ))} */}
      </div>
    );
  }
}

export default FormCards;
