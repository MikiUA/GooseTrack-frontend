import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ModalHeader } from '../ModalFeedback.styled';
import { StyledRatingBox } from './ModalRating.styled';

export const ModalRating = ({ setRating, value }) => {
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };
  return (
    <StyledRatingBox>
      <ModalHeader>Rating</ModalHeader>
      <Stack spacing={1}>
        <Rating
          name="size-medium"
          defaultValue={0}
          value={value}
          onChange={handleRatingChange}
        />
      </Stack>
    </StyledRatingBox>
  );
};
