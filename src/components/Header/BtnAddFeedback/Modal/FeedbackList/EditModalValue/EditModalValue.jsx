import { useState } from 'react';
import { ModalRating } from '../../Modal_rating/ModalRating';
import { ModalReview } from '../../Modal_review/ModalReview';
import { useUpdateFeedbackMutation } from 'API/feedbackApi';
import { ChangeButtonSave } from './EditModalValue.styled';

export const EditModalValue = ({ selectedFeedback, itemId }) => {
  const [editedRating, setEditedRating] = useState(selectedFeedback.rating);
  const [editedReview, setEditedReview] = useState(
    String(selectedFeedback.message)
  );
  const [updateFeedback] = useUpdateFeedbackMutation();

  const feedbackData = {
    rating: editedRating,
    message: editedReview,
  };

  const handleSubmit = async itemId => {
    const res = await updateFeedback({ id: itemId, body: feedbackData });
    console.log(res);
  };

  return (
    <>
      <div>
        <ModalRating
          setRating={setEditedRating}
          value={editedRating}
          onChange={setEditedRating}
        />
        <ModalReview
          value={editedReview}
          onChange={event => setEditedReview(event.target.value)}
        />
        <ChangeButtonSave type="button" onClick={() => handleSubmit(itemId)}>
          Edit
        </ChangeButtonSave>
      </div>
    </>
  );
};
