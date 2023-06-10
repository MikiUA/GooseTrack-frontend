import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import Checkbox from './Checkbox/Checkbox';
import {
  TaskForm,
  TaskFormButtonAdd,
  TaskFormButtonAddSpan,
  TaskFormButtonCancel,
  TaskFormButtonWrap,
  TaskFormCheckboxWrap,
  TaskFormInputWrap,
  TaskFormLabel,
  TaskFormLabelWrap,
  TaskFormWrap,
} from './ModalTaskForm.styled';
import { CustomTextField, CustomTimeField } from './ModalTaskFormStyle';

const ModalTaskForm = ({ onClose }) => {
  const [startValue, setStartValue] = useState(dayjs('2022-04-17T09:00'));
  const [endValue, setEndValue] = useState(dayjs('2022-04-17T14:00'));
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = value => {
    setSelectedOption(value);
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
            value="Low"
            label="Low"
            checked={selectedOption === 'Low'}
            onChange={() => handleCheckboxChange('Low')}
            color="#72C2F8"
          />
          <Checkbox
            value="Medium"
            label="Medium"
            checked={selectedOption === 'Medium'}
            onChange={() => handleCheckboxChange('Medium')}
            color="#F3B249"
          />
          <Checkbox
            value="High"
            label="High"
            checked={selectedOption === 'High'}
            onChange={() => handleCheckboxChange('High')}
            color="#EA3D65"
          />
        </TaskFormCheckboxWrap>
        <TaskFormButtonWrap>
          <TaskFormButtonAdd>
            <TaskFormButtonAddSpan>+</TaskFormButtonAddSpan> <span>Add</span>
          </TaskFormButtonAdd>
          <TaskFormButtonCancel onClick={onClose}>Cancel</TaskFormButtonCancel>
        </TaskFormButtonWrap>
      </TaskForm>
    </>
  );
};
export default ModalTaskForm;
