import {
  ButtonAdd,
  ButtonIcon,
  ButtonIconStyled,
  ButtonIconStyledPlus,
  Container,
  Text,
} from './AddTaskBtn.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalTaskForm from '../ModalTaskForm/ModalTaskForm';
import { useAddTaskMutation } from 'API/taskUtils';

const AddTaskBtn = ({ columnHeadBtn, category }) => {
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
      await addTask({
        title: title,
        start: start,
        end: end,
        priority: priority,
        date: date,
        category: category,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {columnHeadBtn ? (
        <ButtonIcon type="button" onClick={handleToggle}>
          <ButtonIconStyled name="icon-icon" width="20" height="20" />
        </ButtonIcon>
      ) : (
        <ButtonAdd type="button" onClick={handleToggle}>
          <Container>
            <ButtonIconStyledPlus name="icon-plus" width="16" height="16" />
            <Text onClose={handleToggle}>Add task</Text>
          </Container>
        </ButtonAdd>
      )}
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        <ModalTaskForm
          onClose={handleToggle}
          handleSubmit={handleSubmit}
          category={category}
        />
      </Modal>
    </>
  );
};

export default AddTaskBtn;
