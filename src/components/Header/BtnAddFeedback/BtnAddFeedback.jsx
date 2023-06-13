import { StyledButton, FeedbackWrapper } from './BtnAddFeedback.styled';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import { ModalRating } from './Modal/Modal_rating/ModalRating';
import { ModalReview } from './Modal/Modal_review/ModalReview';
import { ModalButtonSave } from './Modal/Modal_button_save/ModalButtonSave';
import { useLocation } from 'react-router-dom';
import {
  useCreateFeedbackMutation,
  useGetMyFeedbacksQuery,
  useDeleteFeedbackMutation,
} from 'API/feedbackApi';
import { FeedbackList } from './Modal/FeedbackList/FeedbackList';
import { Box, CircularProgress } from '@mui/material';

export const BtnAddFeedback = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [createFeedback] = useCreateFeedbackMutation();
  const [deleteFeedback] = useDeleteFeedbackMutation();
  const handleToggle = () => setIsOpenModal(pS => !pS);

  const { data, isLoading, refetch } = useGetMyFeedbacksQuery();

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

  const feedbackData = {
    rating: rating,
    message: review,
  };

  const pageTitle = getPageTitle(location.pathname);

  const handleSubmit = async feedbackData => {
    const res = await createFeedback(feedbackData);

    if (!res.error) {
      refetch();

      setRating(0);
      setReview('');
    }
  };

  const handleDelete = async id => {
    const res = await deleteFeedback(id);
    if (!res.error) {
      refetch();
    }
  };

  const handleReviewChange = event => {
    const newReview = event.target.value;
    setReview(newReview);
  };

  const handleModalUpdated = () => {
    refetch();
  };
  return (
    <>
      {pageTitle === 'Calendar' && (
        <StyledButton onClick={handleToggle} variant="contained">
          Feedback
        </StyledButton>
      )}
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        <FeedbackWrapper>
          <ModalRating setRating={setRating} value={rating} />
          <ModalReview value={review} onChange={handleReviewChange} />
          <ModalButtonSave onClick={() => handleSubmit(feedbackData)} />
          {isLoading ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress sx={{ color: 'white' }} />
            </Box>
          ) : (
            <FeedbackList
              data={data}
              req={handleDelete}
              onModalUpdated={handleModalUpdated}
            />
          )}
        </FeedbackWrapper>
      </Modal>
    </>
  );
};
