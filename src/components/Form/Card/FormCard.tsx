import './FormCard.scss';

import React from 'react';

import { FormCardType } from '../../../types';

class FormCard extends React.Component<FormCardType> {
  constructor(props: FormCardType) {
    super(props);
  }

  render() {
    return (
      <div className="form-card-wrapper">
        <div className="card-header">
          <div className="card-fullname">{this.props.fullname}</div>
          <img className="card-image" src={this.props.picture} alt="picture" />
        </div>
        <div className="card-footer">
          <div className="card-city">Favorite city: {this.props.favoriteCity}</div>
          <div className="card-birthday">Birthday: {this.props.birthday}</div>
          <div className="card-gender">Gender: {this.props.gender}</div>
          <div className="card-permission">
            I {this.props.permission ? '' : "don't"} want to receive notifications about promo,
            sales, etc.
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
