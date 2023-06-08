import Icon from "utils/Icon/Icon";
import { Button } from "./AddTaskBtn.styled";

const AddTaskBtn = ({columnHeadBtn}) => {
    return (
        <>
            {
                columnHeadBtn ? 
                    <Button type="button">
                        <Icon name="icon-icon" width="20" height="20"/>
                    </Button> :
                    <Button type="button">
                        Add task
                    </Button>
            }   
        </>
    )
}

export default AddTaskBtn;