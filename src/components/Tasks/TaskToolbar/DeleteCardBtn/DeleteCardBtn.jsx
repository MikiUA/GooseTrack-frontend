import { useState } from "react";
import Modal from "components/Modal/Modal";
import DeleteModalCard from "./DeleteModalCard/DeleteModalCard";
import { useDeleteTaskByIdMutation } from "API/taskUtils";
import { Button, IconStyled } from "./DeleteCardBtn.styled";


const DeleteCardBtn = ({ id }) => {
    const [isModalOpen, setIsOpenModal] = useState(false);
    const handleToggle = () => setIsOpenModal(pS => !pS);

    const [deleteTask] = useDeleteTaskByIdMutation();

    const handleDelete = async ({ task_id }) => {
        try {
            console.log(task_id)
            const res = await deleteTask( task_id )
            console.log(res)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <li>
            <Button onClick={handleToggle}>
                <IconStyled name="icon-trash-04" width="16" height="16" />
            </Button>
            <Modal onClose={handleToggle} isOpen={isModalOpen}>
                <DeleteModalCard onClose={handleToggle} handleDelete={() => handleDelete(id)} id={id}/>
            </Modal>
        </li>
    )
}

export default DeleteCardBtn;