import { TaskItem, TasksContainer } from './TaskList.styled';

const TaskList = ({ taskArr = [] }) => {
  return (
    <TasksContainer manyTasks={taskArr.length > 2 ? true : false}>
      {taskArr.map(task => {
        return (
          <TaskItem
            key={task._id}
            priority={task.priority}
            manyTasks={taskArr.length > 2 ? true : false}
          >
            {task.title}
          </TaskItem>
        );
      })}
    </TasksContainer>
  );
};
export default TaskList;
