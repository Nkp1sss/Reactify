import './Card.scss';
import React from 'react';

import instagramLogo from '/instagram.svg';
import facebookLogo from '/facebook.svg';
import twitterLogo from '/twitter.svg';
import { ILinks, TPeople } from '../../types/component';
import PersonInfo from './PersonInfo';

class Card extends React.Component<TPeople> {
  render() {
    const socialLinks = [
      { name: 'instagram', logo: instagramLogo },
      { name: 'facebook', logo: facebookLogo },
      { name: 'twitter', logo: twitterLogo },
    ];

    const socialLinksList = socialLinks.map(
      (link, index) =>
        this.props[link.name as keyof ILinks] && (
          <a key={index} href={this.props[link.name as keyof ILinks]}>
            <img
              src={link.logo}
              className={`${link.name}-logo`}
              width="32px"
              height="32px"
              alt={`${link.name} logo`}
            />
          </a>
        )
    );

    return (
      <div className="card" data-testid={`test-${this.props.id}`}>
        <img className="photo" src={this.props.photo} alt="picture" />
        <PersonInfo {...this.props} />
        <div className="icons">{socialLinksList}</div>
      </div>
    );
  }
}

export default Card;
