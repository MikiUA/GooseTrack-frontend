import { StyledButtonSave } from './ModalButtonSave.styled';

export const ModalButtonSave = ({ onClick }) => {
  return (
    <>
      <StyledButtonSave variant="contained" type="button" onClick={onClick}>
        Save
      </StyledButtonSave>
    </>
  );
};
