import { TaskItem, TasksContainer } from './TaskList.styled';

const TaskList = ({ taskArr = [] }) => {
  return (
    <TasksContainer>
      {taskArr.map(task => {
        return (
          <TaskItem key={task._id} priority={task.priority}>
            {task.title}
          </TaskItem>
        );
      })}
    </TasksContainer>
  );
};
export default TaskList;
