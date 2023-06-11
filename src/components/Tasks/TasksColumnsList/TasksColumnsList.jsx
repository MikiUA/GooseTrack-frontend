import { useParams } from "react-router";
import TasksColumn from "../TasksColumn/TasksColumn";
import { List } from "./TasksColumnsList.styled";
import { useAllTaskQuery } from "API/taskUtils";
import { useMemo } from "react";


const tasks = [
    {
        id: 1,
        title: "зробити верстку картки i рампам па мм м м ммм",
        priority: "high",
        start: "09:00",
        end: "09:30",
        date: "2023-06-05"
    },
    {
        id: 2,
        title: "підключити стилі",
        priority: "medium",
        start: "10:00",
        end: "10:30",
        date: "2023-06-05"
    },
    {
        id: 3,
        title: "підключити логіку",
        priority: "low",
        start: "11:00",
        end: "11:30",
        date: "2023-06-05"
    },
]; // колекція тасків, залежить від інфо в базі даних. Це приклад

const taskTypes={
    "To do":"to-do",
    "In Progress":"in-progress",
    "Done":"done"
}

const getTodayTasksFromAll=(currentDay,data=[])=>{
    function checkValididty(task,taskType){
        if (task.date!==currentDay) return false;
        if (task.category!==taskType) return false;
        return true;
    }
    return Object.fromEntries(Object.entries(taskTypes).map(([title,type])=>{
        const arr=data.filter((task)=>checkValididty(task,type))||[];
        return [title,arr];
    }));
}    

const TasksColumnsList = () => {
    const {currentDate}=useParams();
    const {data} = useAllTaskQuery(({startDate:'2010-01-01',endDate:'2030-01-01'}));
    const todayTasks = useMemo(()=>getTodayTasksFromAll(currentDate,data),[currentDate,data])

    return (
        <List> {
            Object.keys(taskTypes).map(taskColumnTitle => (
                <TasksColumn
                    key={taskColumnTitle}
                    taskColumnTitle={taskColumnTitle}
                    tasks={todayTasks[taskColumnTitle]} 
                    category={taskTypes[taskColumnTitle]}/>))}  
        </List>
    )
}

export default TasksColumnsList;