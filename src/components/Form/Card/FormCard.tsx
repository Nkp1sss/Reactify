import './FormCard.scss';

import React from 'react';

class FormCard extends React.Component {
  render() {
    return (
      <div className="form-card-wrapper">
        <div className="card-header">
          <div className="card-fullname">Nikita Kovalev</div>
          <img
            className="card-image"
            src="https://fikiwiki.com/uploads/posts/2022-02/1645058018_5-fikiwiki-com-p-kartinki-s-khoroshim-kachestvom-6.jpg"
            alt="picture"
          />
        </div>
        <div className="card-footer">
          <div className="card-city">Favorite city: Minsk</div>
          <div className="card-birthday">Birthday: 19.11.2002</div>
          <div className="card-gender">Gender: male</div>
          <div className="card-permission">
            I want to receive notifications about promo, sales, etc.
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
