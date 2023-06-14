import MoveCardBtn from './MoveCardBtn/MoveCardBtn';
import EditCardBtn from './EditCardBtn/EditCardBtn';
import DeleteCardBtn from './DeleteCardBtn/DeleteCardBtn';
import { List } from './TaskToolbar.styled';

const TaskToolbar = ({ id, category, title, priority, start, end, date }) => {
  
  return (
    <List>
      <MoveCardBtn id={id} category={category} />
      <EditCardBtn id={id} title={title} start={start} end={end} date={date} priority={priority} />
      <DeleteCardBtn id={id} />
    </List>
  );
};

export default TaskToolbar;
