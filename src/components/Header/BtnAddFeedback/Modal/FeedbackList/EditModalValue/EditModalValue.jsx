import { useState } from 'react';
import { ModalRating } from '../../Modal_rating/ModalRating';
import { ModalReview } from '../../Modal_review/ModalReview';

export const EditModalValue = ({ selectedFeedback }) => {
  const [editedRating, setEditedRating] = useState(selectedFeedback.rating);
  const [editedReview, setEditedReview] = useState(
    String(selectedFeedback.message)
  );

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
        <button type="button">Save</button>
      </div>
    </>
  );
};
