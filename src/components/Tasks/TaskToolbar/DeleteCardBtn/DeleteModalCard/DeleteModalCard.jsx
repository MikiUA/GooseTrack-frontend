import { CancelBtn, Container, ContainerBtn, DeleteBtn, Title } from "./DeleteModalCard.styled";


const DeleteModalCard = ({ onClose, handleDelete, id }) => {
    
    const deleteTask = () => {
        handleDelete(id);
    }

    return (
        <Container>
            <Title>Do you really want to delete this task?</Title>
            <ContainerBtn>
                <DeleteBtn onClick={deleteTask}>
                Delete
                </DeleteBtn>
                <CancelBtn onClick={onClose}>
                Cancel
                </CancelBtn>
            </ContainerBtn>
        </Container>
    )
}

export default DeleteModalCard