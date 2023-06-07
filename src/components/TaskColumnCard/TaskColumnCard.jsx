// TaskToolBar
// TaskModal

import TaskToolbar from "../TaskToolbar/TaskToolbar";
import TaskModal from "../TaskModal/TaskModal";
import css from "./TaskColumnCard.module.css";
import img from "../../images/pngegg.png";


const TaskColumnCard = ({title, priority, id, task}) => {

    let componentClassName;

    switch (priority) {
        case "low":
            componentClassName = css.priority__low;
            break;

        case "medium":
            componentClassName = css.priority__medium;
            break;
        
        case "high":
            componentClassName = css.priority__high;
            break;
        
        default:
            break;
    }


    return (
        <li className={css.item}>
            <h3 className={css.title}>{title}</h3>
            <div className={css.container}>
                <div className={css.container__info}>
                    <div className={css.container__user}>
                        <img src={img} alt="user_photo" width="32" height="32" />
                    </div>
                    <span className={`${componentClassName} ${css.priority}`}>{priority}</span>
                </div>
                <TaskToolbar id={id} task={task} />
            </div>
            <TaskModal />
        </li>
    )
}

export default TaskColumnCard;