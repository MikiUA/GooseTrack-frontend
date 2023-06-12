import { Button, IconStyled } from "./DeleteCardBtn.styled";


const DeleteCardBtn = () => {
    return (
        <li>
            <Button>
                <IconStyled name="icon-trash-04" width="16" height="16" />
            </Button>
        </li>
    )
}

export default DeleteCardBtn;