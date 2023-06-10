import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ModalHeader } from '../ModalFeedback.styled';
import { StyledRatingBox } from './ModalRating.styled';

export const ModalRating = () => {
  return (
    <StyledRatingBox>
      <ModalHeader>Rating</ModalHeader>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={0} />
      </Stack>
    </StyledRatingBox>
  );
};
