import './Card.scss';

import { useState } from 'react';

import instagramLogo from '/instagram.svg';
import facebookLogo from '/facebook.svg';
import twitterLogo from '/twitter.svg';
import { ILinks, PeopleType } from '../../types';
import PersonInfo from './PersonInfo';
import Modal from '../Modal/Modal';
import ModalInfo from '../Modal/ModalCard';

function Card(props: PeopleType) {
  const socialLinks = [
    { name: 'instagram', logo: instagramLogo },
    { name: 'facebook', logo: facebookLogo },
    { name: 'twitter', logo: twitterLogo },
  ];

  const socialLinksList = socialLinks.map(
    (link, index) =>
      props[link.name as keyof ILinks] && (
        <a key={index} href={props[link.name as keyof ILinks]}>
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

  const [isModal, setIsModal] = useState(false);
  const onClose = () => setIsModal(false);

  return (
    <>
      <div className="card" data-testid={`test-${props.id}`} onClick={() => setIsModal(true)}>
        <img
          className="photo"
          src={`https://json-server-6d972uqd4-nkp1sss.vercel.app/${props.photo}`}
          alt="picture"
        />
        <PersonInfo {...props} />
        <div className="icons">{socialLinksList}</div>
      </div>
      <Modal visible={isModal} content={<ModalInfo personId={props.id} />} onClose={onClose} />
    </>
  );
}

export default Card;
