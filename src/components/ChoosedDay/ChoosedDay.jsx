// DayCalendarHead
// TasksComulmnList
import DayCalendarHead from "./DayCalendarHead/DayCalendarHead";
import TasksColumnsList from "components/Tasks/TasksColumnsList/TasksColumnsList";

//цей компонент потрібно доробити, так як я його створив виключно для того, щоб вписати туди TasksColumnsList

const ChoosedDay = () => {
    return (
        <div>
            <DayCalendarHead/>
            <TasksColumnsList />
        </div>
  );
}

export default ChoosedDay;