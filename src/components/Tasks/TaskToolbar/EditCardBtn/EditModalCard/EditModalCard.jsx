import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  TaskForm,
  TaskFormButtonAdd,
  TaskFormButtonAddSpan,
  TaskFormButtonCancel,
  TaskFormCheckboxWrap,
  TaskFormInputWrap,
  TaskFormLabel,
  TaskFormLabelWrap,
  TaskFormWrap,
} from '../../../ModalTaskForm/ModalTaskForm.styled';
import Checkbox from '../../../ModalTaskForm/Checkbox/Checkbox';
import {
  CustomTextField,
  CustomTimeField,
} from '../../../ModalTaskForm/ModalTaskFormStyle';
import { TaskFormButtonWrap } from './EditModalCard.styled';
import { useUpdateTaskPropertiesByIdMutation } from 'API/taskUtils';

const EditModalCard = ({ onClose, currentTask }) => {
  const [updateTaskPropertiesById] = useUpdateTaskPropertiesByIdMutation();
  const [startValue, setStartValue] = useState(
    dayjs(`2022-04-17T${currentTask.start}`)
  );
  const [endValue, setEndValue] = useState(
    dayjs(`2022-04-17T${currentTask.end}`)
  );
  const [selectedOption, setSelectedOption] = useState(currentTask.priority);
  const [formTitle, setFormTitle] = useState(currentTask.title);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = formTitle !== '' && selectedOption !== '';
    setIsFormValid(isValid);
  }, [formTitle, selectedOption]);

  const handleFormTitleChange = event => {
    setFormTitle(event.target.value);
  };

  const handleCheckboxChange = value => {
    setSelectedOption(value);
  };

  const newFormValue = {
    title: formTitle,
    start: startValue.format('HH:mm'),
    end: endValue.format('HH:mm'),
    priority: selectedOption,
  };
  const handleFormSubmit = async () => {
    try {
      if (isFormValid) {
        await updateTaskPropertiesById({
          id: currentTask.id,
          body: newFormValue,
        });

        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TaskForm>
        <TaskFormWrap>
          <TaskFormLabel htmlFor="outlined-basic">Title</TaskFormLabel>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            value={formTitle}
            onChange={handleFormTitleChange}
            required
          />
        </TaskFormWrap>
        <TaskFormInputWrap>
          <TaskFormLabelWrap>
            <TaskFormLabel htmlFor="start">Start</TaskFormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CustomTimeField
                id="start"
                value={startValue}
                onChange={newValue => setStartValue(newValue)} // Update the startValue state
                format="HH:mm"
              />
            </LocalizationProvider>
          </TaskFormLabelWrap>
          <TaskFormLabelWrap>
            <TaskFormLabel htmlFor="end">End</TaskFormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CustomTimeField
                id="end"
                value={endValue} // Update the value prop to endValue
                onChange={newValue => setEndValue(newValue)} // Update the endValue state
                format="HH:mm"
              />
            </LocalizationProvider>
          </TaskFormLabelWrap>
        </TaskFormInputWrap>
        <TaskFormCheckboxWrap>
          <Checkbox
            value="low"
            label="Low"
            checked={selectedOption === 'low'}
            onChange={() => handleCheckboxChange('low')}
            color="#72C2F8"
          />
          <Checkbox
            value="medium"
            label="Medium"
            checked={selectedOption === 'medium'}
            onChange={() => handleCheckboxChange('medium')}
            color="#F3B249"
          />
          <Checkbox
            value="high"
            label="High"
            checked={selectedOption === 'high'}
            onChange={() => handleCheckboxChange('high')}
            color="#EA3D65"
          />
        </TaskFormCheckboxWrap>
        <TaskFormButtonWrap>
          <TaskFormButtonAdd type="button" onClick={handleFormSubmit}>
            <TaskFormButtonAddSpan>+</TaskFormButtonAddSpan> <span>Add</span>
          </TaskFormButtonAdd>
          <TaskFormButtonCancel onClick={onClose}>Cancel</TaskFormButtonCancel>
        </TaskFormButtonWrap>
      </TaskForm>
    </div>
  );
};

export default EditModalCard;
