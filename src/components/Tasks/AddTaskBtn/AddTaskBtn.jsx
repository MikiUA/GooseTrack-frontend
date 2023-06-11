import Icon from 'utils/Icon/Icon';
import { Button } from './AddTaskBtn.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalTaskForm from '../ModalTaskForm/ModalTaskForm';
import { useAddTaskMutation } from 'API/taskUtils';

const AddTaskBtn = ({ columnHeadBtn,category }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

  const [addTask] = useAddTaskMutation();

  const handleSubmit = async ({
    title,
    start,
    end,
    priority,
    date,
    category,
  }) => {
    try {
      const res = await addTask({
        title: title,
        start: start,
        end: end,
        priority: priority,
        date: date,
        category: category,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {columnHeadBtn ? (
        <Button type="button">
          <Icon name="icon-icon" width="20" height="20" />
        </Button>
      ) : (
        <Button type="button" onClick={handleToggle}>
          Add task
        </Button>
      )}
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        <ModalTaskForm onClose={handleToggle} handleSubmit={handleSubmit} category={category}/>
      </Modal>
    </>
  );
};

export default AddTaskBtn;
