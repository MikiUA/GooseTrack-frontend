import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../API/userSlice';
import { List } from './ColumnTasksList.styled';

const ColumnTasksList = ({ tasks }) => {
  const userInfo = useSelector(getUserInfo);
  const userName = userInfo.name;
  const firstLetter = userName[0].toLocaleUpperCase();

  return (
    <List>
      {tasks !== 0 &&
        tasks.map(({ title, _id, priority }) => (
          <TaskColumnCard
            key={_id}
            title={title}
            priority={priority}
            firstLetter={firstLetter}
            id={_id}
          />
        ))}
    </List>
  );
};

export default ColumnTasksList;
