import ColumnHeadBar from "../ColumnHeadBar/ColumnHeadBar";
import ColumnTasksList from "../ColumnTasksList/ColumnTasksList";
import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import { Item } from "./TasksColumn.styled";


const TasksColumn = ({taskColumnTitle, tasks,category}) => {
    return (
        <Item>
            <ColumnHeadBar taskColumnTitle={taskColumnTitle} />

            {tasks && <ColumnTasksList tasks={tasks} />}

            <AddTaskBtn category={category}/>
        </Item>
    )
}

export default TasksColumn;