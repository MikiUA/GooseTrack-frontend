import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../API/userSlice';
import { ListStyled } from './ColumnTasksList.styled';

const ColumnTasksList = ({ tasks }) => {
  const userInfo = useSelector(getUserInfo);
  const userName = userInfo.name;
  const firstLetter = userName[0].toLocaleUpperCase();

  return (
    <ListStyled>
      {tasks !== 0 &&
        tasks.map(({ category, title, _id, priority, start, end, date }) => (
          <TaskColumnCard
            key={_id}
            title={title}
            priority={priority}
            firstLetter={firstLetter}
            id={_id}
            category={category}
            start={start}
            end={end}
            date={date}
          />
        ))}
    </ListStyled>
  );
};

export default ColumnTasksList;
