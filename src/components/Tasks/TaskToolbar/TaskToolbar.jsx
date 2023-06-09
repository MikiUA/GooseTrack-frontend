import MoveCardBtn from "./MoveCardBtn/MoveCardBtn"
import EditCardBtn from "./EditCardBtn/EditCardBtn"
import DeleteCardBtn from "./DeleteCardBtn/DeleteCardBtn"
import { List } from "./TaskToolbar.styled"


const TaskToolbar = () => {
    return (
        <List>
            <MoveCardBtn />
            <EditCardBtn />
            <DeleteCardBtn /> 
        </List>
    )
}

export default TaskToolbar