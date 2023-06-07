import css from "./AddTaskBtn.module.css";

const AddTaskBtn = ({columnHeadBtn}) => {
    return (
        <>
            {
                columnHeadBtn ? 
                    <button type="button">+</button> :
                    <button className={css.button} type="button">Add task</button>
            }   
        </>
    )
}

export default AddTaskBtn;