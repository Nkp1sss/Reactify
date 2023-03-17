import './Card.scss';
import React from 'react';

import instagramLogo from '/instagram.svg';
import facebookLogo from '/facebook.svg';
import twitterLogo from '/twitter.svg';
import { TPeople } from '../../types/component';

class Card extends React.Component<TPeople> {
  render() {
    return (
      <div className="card">
        <img className="photo" src={this.props.photo} alt="picture" />
        <h1 className="fullname">{this.props.name}</h1>
        <div className="info">
          <div className="work">
            <p className="profession">Work: {this.props.profession}</p>
            <p className="company">{this.props.company ? `Company: ${this.props.company}` : ''}</p>
          </div>
          <p className="age">{this.props.age} years old</p>
        </div>
        <div className="icons">
          {this.props.instagram ? (
            <a href={this.props.instagram}>
              <img
                src={instagramLogo}
                className="instagram-logo"
                width="32px"
                height="32px"
                alt="instagram logo"
              />
            </a>
          ) : (
            ''
          )}
          {this.props.facebook ? (
            <a href={this.props.facebook}>
              <img
                src={facebookLogo}
                className="facebook-logo"
                width="32px"
                height="32px"
                alt="facebook logo"
              />
            </a>
          ) : (
            ''
          )}
          {this.props.twitter ? (
            <a href={this.props.twitter}>
              <img
                src={twitterLogo}
                className="twitter-logo"
                width="32px"
                height="32px"
                alt="twitter logo"
              />
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Card;
