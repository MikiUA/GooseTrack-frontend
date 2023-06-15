import { useState } from 'react';
import { ModalRating } from '../../Modal_rating/ModalRating';
import { ModalReview } from '../../Modal_review/ModalReview';
import { useUpdateFeedbackMutation } from 'API/feedbackApi';
import { ChangeButtonCancel, ChangeButtonSave } from './EditModalValue.styled';

export const EditModalValue = ({
  selectedFeedback,
  itemId,
  onModalUpdated,
  onClose,
}) => {
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
    try {
      const res = await updateFeedback({ id: itemId, body: feedbackData });

      if (!res.error) {
        onModalUpdated();
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <ModalRating
          setRating={setEditedRating}
          value={editedRating}
          onChange={setEditedRating}
        />
        <ModalReview
          value={editedReview}
          onChange={event => setEditedReview(event.target.value)}
        />
        <div style={{ display: 'flex', gap: '8px' }}>
          <ChangeButtonSave type="button" onClick={() => handleSubmit(itemId)}>
            Edit
          </ChangeButtonSave>
          <ChangeButtonCancel type="button" onClick={onClose}>
            Cancel
          </ChangeButtonCancel>
        </div>
      </div>
    </>
  );
};
