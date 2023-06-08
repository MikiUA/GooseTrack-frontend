import TaskColumnCard from "../TaskColumnCard/TaskColumnCard";
import { List } from "./ColumnTasksList.styled";


const ColumnTasksList = ({tasks}) => {
    return (
        <List>
            {tasks !== 0 && tasks.map(({title, id, priority}) => (
                <TaskColumnCard key={id} title={title} priority={priority} />
            ))}
        </List>
    )
}

export default ColumnTasksList;