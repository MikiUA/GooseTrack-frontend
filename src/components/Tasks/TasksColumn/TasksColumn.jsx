import ColumnHeadBar from "../ColumnHeadBar/ColumnHeadBar";
import ColumnTasksList from "../ColumnTasksList/ColumnTasksList";
import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import { Item } from "./TasksColumn.styled";


const TasksColumn = ({taskColumnTitle, tasks}) => {
    return (
        <Item>
            <ColumnHeadBar taskColumnTitle={taskColumnTitle} />

            {tasks && <ColumnTasksList tasks={tasks} />}

            <AddTaskBtn />
        </Item>
    )
}

export default TasksColumn;