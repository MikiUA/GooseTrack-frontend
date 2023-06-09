import { StyledButton } from './BtnAddFeedback.styled';
import { useState } from 'react';
import Modal from '../../Modal/Modal';

export const BtnAddFeedback = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);
  return (
    <>
      <StyledButton onClick={handleToggle} variant="contained">
        Feedback
      </StyledButton>
      <Modal onClose={handleToggle} isOpen={isModalOpen}></Modal>
    </>
  );
};
