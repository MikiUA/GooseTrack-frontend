import MoveCardBtn from './MoveCardBtn/MoveCardBtn';
import EditCardBtn from './EditCardBtn/EditCardBtn';
import DeleteCardBtn from './DeleteCardBtn/DeleteCardBtn';
import { List } from './TaskToolbar.styled';

const TaskToolbar = ({ id, category }) => {
  return (
    <List>
      <MoveCardBtn id={id} category={category} />
      <EditCardBtn id={id} />
      <DeleteCardBtn id={id} />
    </List>
  );
};

export default TaskToolbar;
