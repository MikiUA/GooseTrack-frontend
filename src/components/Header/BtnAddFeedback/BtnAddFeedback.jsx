import { StyledButton, FeedbackWrapper } from './BtnAddFeedback.styled';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import { ModalRating } from './Modal/Modal_rating/ModalRating';
import { ModalReview } from './Modal/Modal_review/ModalReview';
import { ModalButtonSave } from './Modal/Modal_button_save/ModalButtonSave';
import { useLocation } from 'react-router-dom';

export const BtnAddFeedback = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

  const location = useLocation();

  const getPageTitle = pathname => {
    if (pathname.startsWith('/calendar')) {
      return 'Calendar';
    } else if (pathname.startsWith('/account')) {
      return 'User Profile';
    } else {
      return '';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <>
      {pageTitle === 'Calendar' && (
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
