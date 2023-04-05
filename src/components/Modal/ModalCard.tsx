import './ModalCard.scss';

import { TPeople } from '../../types/component';

function ModalInfo(props: TPeople) {
  return (
    <div className="modal-info">
      <img
        className="info-photo"
        src={`https://json-server-6d972uqd4-nkp1sss.vercel.app/${props.photo}`}
        alt="picture"
      />
      <p className="info-name">{props.name}</p>
      <p className="info-age">{props.age} years old</p>
      <p className="info-profession">Work: {props.profession}</p>
      <p className="info-description">{props.description}</p>
    </div>
  );
}

export default ModalInfo;
