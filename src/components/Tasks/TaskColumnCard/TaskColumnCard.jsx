import TaskToolbar from "../TaskToolbar/TaskToolbar";
import TaskModal from "../TaskModal/TaskModal";
import {
    Item,
    Title,
    Container,
    ContainerInfo,
    ContainerUser,
    Priority
} from "./TaskColumnCard.styled";

import Icon from "../../../utils/Icon";


const TaskColumnCard = ({title, priority, id, task}) => {

    let componentStyle;

    switch (priority) {
        case "low":
            componentStyle = { backgroundColor: "#72C2F8" };
            break;

        case "medium":
            componentStyle = { backgroundColor: "#F3B249;" };
            break;
        
        case "high":
            componentStyle = { backgroundColor: "#EA3D65" };
            break;
        
        default:
            break;
    }


    return (
        <Item>
            <Title>{title}</Title>
            <Container>
                <ContainerInfo>
                    <ContainerUser>
                        <Icon name="icon-ph_user" width="32" height="32" />
                    </ContainerUser>
                    <Priority backgroundColor={componentStyle.backgroundColor}>{priority}</Priority>
                </ContainerInfo>
                <TaskToolbar id={id} task={task} />
            </Container>
            <TaskModal />
        </Item>
    )
}

export default TaskColumnCard;