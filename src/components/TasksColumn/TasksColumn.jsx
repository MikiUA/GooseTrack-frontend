import ColumnHeadBar from "../ColumnHeadBar/ColumnHeadBar";
import ColumnTasksList from "../ColumnTasksList/ColumnTasksList";
import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import css from "./TasksColumn.module.css";


const TasksColumn = ({taskColumnTitle, tasks}) => {
    return (
        <li className={css.item}>
            <ColumnHeadBar taskColumnTitle={taskColumnTitle} />

            {tasks && <ColumnTasksList tasks={tasks} />}

            <AddTaskBtn />
        </li>
    )
}

export default TasksColumn;