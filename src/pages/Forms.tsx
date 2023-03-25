import React from 'react';
import FormCards from '../components/Form/Cards/FormCards';
import Form from '../components/Form/Form';

class Forms extends React.Component {
  render() {
    return (
      <main className="forms">
        <div className="container">
          <Form />
          <FormCards />
        </div>
      </main>
    );
  }
}

export default Forms;
