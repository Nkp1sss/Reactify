import React from 'react';

import { TPeople } from '../../types/component';

class PersonInfo extends React.Component<TPeople> {
  render() {
    return (
      <>
        <h1 className="fullname">{this.props.name}</h1>
        <div className="info">
          <div className="work">
            <p className="profession">Work: {this.props.profession}</p>
            <p className="company">{this.props.company ? `Company: ${this.props.company}` : ''}</p>
          </div>
          <p className="age">{this.props.age} years old</p>
        </div>
      </>
    );
  }
}

export default PersonInfo;
