import { StyledButtonSave } from './ModalButtonSave.styled';

export const ModalButtonSave = ({ onClick }) => {
  return (
    <>
      <StyledButtonSave type="button" onClick={onClick}>
        Save
      </StyledButtonSave>
    </>
  );
};
