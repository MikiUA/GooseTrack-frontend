import Icon from 'utils/Icon/Icon';
import { Button } from './AddTaskBtn.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalTaskForm from '../ModalTaskForm/ModalTaskForm';

const AddTaskBtn = ({ columnHeadBtn }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);

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
        <ModalTaskForm onClose={handleToggle} />
      </Modal>
    </>
  );
};

export default AddTaskBtn;
