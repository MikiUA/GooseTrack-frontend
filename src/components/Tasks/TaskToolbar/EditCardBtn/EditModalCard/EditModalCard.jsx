import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  TaskForm,
  TaskFormCheckboxWrap,
  TaskFormInputWrap,
  TaskFormLabel,
  TaskFormLabelWrap,
  TaskFormWrap,
} from '../../../ModalTaskForm/ModalTaskForm.styled';
import Checkbox from '../../../ModalTaskForm/Checkbox/Checkbox';
import { CustomTextField, CustomTimeField } from '../../../ModalTaskForm/ModalTaskFormStyle';
import { IconStyled, TaskFormButtonWrap, TaskFormButton } from "./EditModalCard.styled";

const EditModalCard = ({ onClose, handleSubmit, currentTask, id }) => {

    const [title, setTitle] = useState(currentTask.title);
    const [start, setStart] = useState(currentTask.start);
    const [end, setEnd] = useState(currentTask.end);
    // const [selectedOption, setSelectedOption] = useState(currentTask.priority);
    const [priority, setPriority] = useState(currentTask.priority);
    const { currentDate } = useParams();

    const TaskNew = {};

    useEffect(() => {
        const isActivRadioButton = document.getElementsByName('priority');
        for (let i = 0; i < isActivRadioButton.length; i += 1) {
        if (isActivRadioButton[i].id === TaskNew.priority) {
            isActivRadioButton[i].setAttribute('checked', 'on');
        }
        }
    });

    for (let i = 0; i < currentTask.length; i += 1) {
        if (currentTask[i].id === id) {
        TaskNew.title = currentTask[i].title;
        TaskNew.start = currentTask[i].start;
        TaskNew.end = currentTask[i].end;
        TaskNew.priority = currentTask[i].priority;
        }
        }
    
    const handleChange = event => {

        const { name, id, value } = event.target;
        if (name === 'title') {
        setTitle(value);
        }
        if (name === 'start') {
        setStart(value);
        }
        if (name === 'end') {
        setEnd(value);
        }
        if (name === 'priority') {
        setPriority(id);
        }
    };

      const handleFormSubmit = () => {
      handleSubmit({
        title: title,
        start: start,
        end: end,
        priority: priority,
        date: currentDate,
      });
      onClose();
  };


    return (
        <div>
        <TaskForm onSubmit={handleFormSubmit}>
            <TaskFormWrap>
            <TaskFormLabel htmlFor="title">Title</TaskFormLabel>
            <CustomTextField
                id="title"
                variant="outlined"
                placeholder="Enter text"
                onChange={handleChange}
                name="title"
                required
                value={title}
            />
            </TaskFormWrap>
            <TaskFormInputWrap>
            <TaskFormLabelWrap>
                <TaskFormLabel htmlFor="start">Start</TaskFormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomTimeField
                    id="start"
                    value={start}
                    onChange={handleChange}
                    format="HH:mm"
                    name="start"
                />
                </LocalizationProvider>
            </TaskFormLabelWrap>
            <TaskFormLabelWrap>
                <TaskFormLabel htmlFor="end">End</TaskFormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomTimeField
                    id="end"
                    value={end}
                    onChange={handleChange}
                    format="HH:mm"
                    name="end"
                />
                </LocalizationProvider>
            </TaskFormLabelWrap>
            </TaskFormInputWrap>
            <TaskFormCheckboxWrap>
            <Checkbox
                id="low"
                value="low"
                label="Low"
                onChange={handleChange}
                color="#72C2F8"
                name="priority"
            />
                <Checkbox
                id="medium"
                value="medium"
                label="Medium"
                onChange={handleChange}
                color="#F3B249"
                name="priority"
            />
                <Checkbox
                id="high"
                value="high"
                label="High"
                onChange={handleChange}
                color="#EA3D65"
                name="priority"
            />
            </TaskFormCheckboxWrap>
            <TaskFormButtonWrap>
            <TaskFormButton type="submit">
                <IconStyled name="icon-pencil-01" width="16" height="16" /> <span>Edit</span>
            </TaskFormButton>
            </TaskFormButtonWrap>
        </TaskForm>
        </div>
    )
}

export default EditModalCard;