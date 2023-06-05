import ReactDOM from 'react-dom';
import { BackdropStyle, ModalStyle, StyledIcon } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <BackdropStyle className="backdrop" onClick={handleClose}>
      <ModalStyle>
        {children}
        <StyledIcon onClick={onClose} />
      </ModalStyle>
    </BackdropStyle>,
    document.getElementById('modal-root')
  );
};

export default Modal;
