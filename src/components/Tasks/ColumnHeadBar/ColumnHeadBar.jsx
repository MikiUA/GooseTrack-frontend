import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import { Container, Title } from "./ColumnHeadBar.styled";


const ColumnHeadBar = ({taskColumnTitle}) => {
    return (
        <Container>
            <Title>{taskColumnTitle}</Title>
            <AddTaskBtn columnHeadBtn />
        </Container>
    )
}

export default ColumnHeadBar;