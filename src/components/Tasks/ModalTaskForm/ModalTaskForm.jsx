import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import Checkbox from './Checkbox/Checkbox';
import {
  TaskForm,
  TaskFormButtonAdd,
  TaskFormButtonAddIconBox,
  TaskFormButtonAddIcon,
  TaskFormButtonCancel,
  TaskFormButtonWrap,
  TaskFormCheckboxWrap,
  TaskFormInputWrap,
  TaskFormLabel,
  TaskFormLabelWrap,
  TaskFormWrap,
} from './ModalTaskForm.styled';
import { CustomTextField, CustomTimeField } from './ModalTaskFormStyle';
import { useParams } from 'react-router-dom';

const ModalTaskForm = ({ onClose, handleSubmit, category }) => {
  const [startValue, setStartValue] = useState(dayjs('2022-04-17T09:00'));
  const [endValue, setEndValue] = useState(dayjs('2022-04-17T14:00'));
  const [selectedOption, setSelectedOption] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const { currentDate } = useParams();

  useEffect(() => {
    const isValid = formTitle !== '' && selectedOption !== '';
    setIsFormValid(isValid);
  }, [formTitle, selectedOption]);

  const handleCheckboxChange = value => {
    setSelectedOption(value);
  };

  const handleFormSubmit = () => {
    if (isFormValid) {
      handleSubmit({
        title: formTitle,
        start: startValue.format('HH:mm'),
        end: endValue.format('HH:mm'),
        priority: selectedOption,
        date: currentDate,
        category: category,
      });
      onClose();
    }
  };

  return (
    <>
      <TaskForm>
        <TaskFormWrap>
          <TaskFormLabel htmlFor="outlined-basic">Title</TaskFormLabel>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter text"
            sx={{ fontFamily: 'Inter', fontSize: '24px' }}
            onChange={event => setFormTitle(event.target.value)}
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
                onChange={newValue => setStartValue(newValue)}
                format="HH:mm"
              />
            </LocalizationProvider>
          </TaskFormLabelWrap>
          <TaskFormLabelWrap>
            <TaskFormLabel htmlFor="end">End</TaskFormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CustomTimeField
                id="end"
                value={endValue}
                onChange={newValue => setEndValue(newValue)}
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
            <TaskFormButtonAddIconBox>
              <TaskFormButtonAddIcon name="icon-plus-white" />
            </TaskFormButtonAddIconBox>
            <span>Add</span>
          </TaskFormButtonAdd>
          <TaskFormButtonCancel onClick={onClose}>Cancel</TaskFormButtonCancel>
        </TaskFormButtonWrap>
      </TaskForm>
    </>
  );
};
export default ModalTaskForm;
