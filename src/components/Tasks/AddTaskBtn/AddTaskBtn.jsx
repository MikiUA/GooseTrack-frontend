import {
  Button,
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
        <ButtonIcon type="button">
          <ButtonIconStyled name="icon-icon" width="20" height="20" />
        </ButtonIcon>
      ) : (
        <Button type="button" onClick={handleToggle}>
          <Container>
            <ButtonIconStyledPlus name="icon-plus" width="16" height="16" />
            <Text onClose={handleToggle}>Add task</Text>
          </Container>
        </Button>
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
