// ColumnHeadBar
// ColumnTasksList

import TasksColumn from "../TasksColumn/TasksColumn";
import css from "./TasksColumnsList.module.css";


const tasks = [
    {
        id: 1,
        title: "зробити верстку картки i рампам па мм м м ммм",
        priority: "high",
        start: "09:00",
        end: "09:30",
        date: "2023-06-05"
    },
    {
        id: 2,
        title: "підключити стилі",
        priority: "medium",
        start: "10:00",
        end: "10:30",
        date: "2023-06-05"
    },
    {
        id: 3,
        title: "підключити логіку",
        priority: "low",
        start: "11:00",
        end: "11:30",
        date: "2023-06-05"
    },
]; // колекція тасків, залежить від інфо в базі даних. Це приклад

const TasksColumnsList = () => {

    const taskColumnTitles = ["To do", "In progress", "Done"];

    return (
        <ul className={css.list}> {
            taskColumnTitles.map(taskColumnTitle => (
                <TasksColumn
                    key={taskColumnTitle}
                    taskColumnTitle={taskColumnTitle}
                    tasks={tasks} />))}  
        </ul>
    )
}

export default TasksColumnsList;