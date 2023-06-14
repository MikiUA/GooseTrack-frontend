import { useState } from 'react';
import { useUpdateTaskByIdMutation } from 'API/taskUtils';
import EditModalCard from './EditModalCard/EditModalCard';
import Modal from 'components/Modal/Modal';
import { Button, IconStyled } from './EditCardBtn.styled';

const EditCardBtn = ({ id, title, start, end, priority, date }) => {
    

  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

  const [updateTaskById] = useUpdateTaskByIdMutation();

  const currentTask = {
    id,
    title,
    start,
    end,
    priority,
    date
  }

  const handleSubmit = async ({
    title,
    start,
    end,
    priority,
    date
  }) => {
    try {
      await updateTaskById({
        title,
        start,
        end,
        priority,
        date,
        id
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <Button onClick={handleToggle}>
        <IconStyled name="icon-pencil-01" width="16" height="16" />
      </Button>
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        <EditModalCard onClose={handleToggle} handleSubmit={handleSubmit} currentTask={currentTask} id={id} />
      </Modal>
    </li>
  );
};

export default EditCardBtn;
