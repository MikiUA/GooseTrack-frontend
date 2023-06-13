import { TaskItem, TasksContainer } from './TaskList.styled';

const TaskList = ({ taskArr = [] }) => {
  return (
    <TasksContainer manyTasks={taskArr.length > 3 ? true : false}>
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
