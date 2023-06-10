import { StyledButton, FeedbackWrapper } from './BtnAddFeedback.styled';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import { ModalRating } from './Modal/Modal_rating/ModalRating';
import { ModalReview } from './Modal/Modal_review/ModalReview';
import { ModalButtonSave } from './Modal/Modal_button_save/ModalButtonSave';

export const BtnAddFeedback = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

  const pathSegments = window.location.pathname.split('/');
  const calendarString = pathSegments.find(segment => segment === 'calendar');

  return (
    <>
      {calendarString && (
        <StyledButton onClick={handleToggle} variant="contained">
          Feedback
        </StyledButton>
      )}
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        <FeedbackWrapper>
          <ModalRating />
          <ModalReview />
          <ModalButtonSave />
        </FeedbackWrapper>
      </Modal>
    </>
  );
};
