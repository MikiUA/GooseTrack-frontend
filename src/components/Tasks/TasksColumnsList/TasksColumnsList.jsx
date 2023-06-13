import { useParams } from 'react-router';
import TasksColumn from '../TasksColumn/TasksColumn';
import { List } from './TasksColumnsList.styled';
import { useAllTaskQuery } from 'API/taskUtils';
import { useMemo } from 'react';

const taskTypes = {
  'To do': 'to-do',
  'In Progress': 'in-progress',
  Done: 'done',
};

const getTodayTasksFromAll = (currentDay, data = []) => {
  function checkValididty(task, taskType) {
    if (task.date !== currentDay) return false;
    if (task.category !== taskType) return false;
    return true;
  }
  return Object.fromEntries(
    Object.entries(taskTypes).map(([title, type]) => {
      const arr = data.filter(task => checkValididty(task, type)) || [];
      return [title, arr];
    })
  );
};

const TasksColumnsList = () => {
  const { currentDate } = useParams();
  const { data } = useAllTaskQuery({
    startDate: '2010-01-01',
    endDate: '2030-01-01',
  });
  const todayTasks = useMemo(
    () => getTodayTasksFromAll(currentDate, data),
    [currentDate, data]
  );

  return (
    <List>
      {' '}
      {Object.keys(taskTypes).map(taskColumnTitle => (
        <TasksColumn
          key={taskColumnTitle}
          taskColumnTitle={taskColumnTitle}
          tasks={todayTasks[taskColumnTitle]}
          category={taskTypes[taskColumnTitle]}
        />
      ))}
    </List>
  );
};

export default TasksColumnsList;
