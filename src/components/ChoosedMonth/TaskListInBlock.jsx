const TaskListInBlock = ({ taskArr = [] }) => {
  return (
    <>
      {taskArr.map(task => {
        return <div key={task._id}>{task.title}</div>;
      })}
    </>
  );
};
export default TaskListInBlock;
