import { Button, IconStyled } from "./MoveCardBtn.styled";


const MoveCardBtn = () => {
    return (
        <li>
            <Button>
                <IconStyled name="icon-arrow-circle-broken-right" width="16" height="16"/>
            </Button>
        </li>
    )
}

export default MoveCardBtn