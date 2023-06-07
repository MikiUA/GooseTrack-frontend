// TaskColumnCard

import TaskColumnCard from "../TaskColumnCard/TaskColumnCard";
import css from "./ColumnTasksList.module.css";

const ColumnTasksList = ({tasks}) => {
    return (
        <ul className={css.list}>
            {tasks !== 0 && tasks.map(({title, id, priority}) => (
                <TaskColumnCard key={id} title={title} priority={priority} />
            ))}
        </ul>
    )
}

export default ColumnTasksList;