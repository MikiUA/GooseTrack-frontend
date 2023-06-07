import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import css from "./ColumnHeadBar.module.css";

const ColumnHeadBar = ({taskColumnTitle}) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>{taskColumnTitle}</h2>
            <AddTaskBtn columnHeadBtn />
        </div>
    )
}

export default ColumnHeadBar;