import { ReactElement } from 'react';
import './Modal.scss';

type TModalProps = {
  visible: boolean;
  content: ReactElement | string;
  onClose: () => void;
};

function Modal({ visible = false, content, onClose }: TModalProps) {
  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
