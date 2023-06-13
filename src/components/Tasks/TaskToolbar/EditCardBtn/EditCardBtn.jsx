import { useUpdateTaskPropertiesByIdMutation } from 'API/taskUtils';
import { Button, IconStyled } from './EditCardBtn.styled';

const EditCardBtn = ({ id }) => {
  const [updateTaskPropertiesById] = useUpdateTaskPropertiesByIdMutation();
  return (
    <li>
      <Button>
        <IconStyled name="icon-pencil-01" width="16" height="16" />
      </Button>
    </li>
  );
};

export default EditCardBtn;
