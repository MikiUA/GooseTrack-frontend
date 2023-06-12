import { ModalHeader } from '../ModalFeedback.styled';
import { StyledTextField } from './ModalReview.styled';
import { StyledReviewBox } from './ModalReview.styled';

export const ModalReview = ({ value, onChange }) => {
  return (
    <StyledReviewBox>
      <ModalHeader>Review</ModalHeader>
      <StyledTextField
        id="outlined-multiline-static"
        multiline
        placeholder="Enter text"
        rows={4}
        value={value}
        onChange={onChange}
      />
    </StyledReviewBox>
  );
};
