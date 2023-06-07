import MoveCardBtn from "./MoveCardBtn/MoveCardBtn"
import EditCardBtn from "./EditCardBtn/EditCardBtn"
import DeleteCardBtn from "./DeleteCardBtn/DeleteCardBtn"
import css from "./TaskToolbar.module.css"


const TaskToolbar = () => {
    return (
        <ul className={css.list}>
            <MoveCardBtn />
            <EditCardBtn />
            <DeleteCardBtn /> 
        </ul>
    )
}

export default TaskToolbar