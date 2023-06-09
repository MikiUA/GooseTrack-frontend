import { useState } from "react"
import {
    StyledMainBox, StyledCalendarBox, StyledSidebarBox, StyledInnerBox,
    StyledOnOffButton,
    StyledSwitchButton,
    StyledThemeSwitcherBox
} from "./ThemeTestPage.styled";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button, ButtonGroup } from "@mui/material";

export default function ThemeTestPage() {
    const [selector, setSelector] = useState(1);
    return (
        <StyledMainBox>
            <StyledSidebarBox>
                <h2>SideBar</h2>
                <StyledOnOffButton onClick={() => setSelector(1)} isOn={(selector === 1)}>My Account</StyledOnOffButton>
                <StyledOnOffButton onClick={() => setSelector(2)} isOn={(selector === 2)}>Calendar</StyledOnOffButton>
                <br /><br />
            </StyledSidebarBox>

            <StyledInnerBox>
                <ThemeSwitcher />
                <>      {/* Calendar Header */}
                    <Button variant="contained">Regular button</Button>
                    <ButtonGroup sx={{ boxSizing: 'border-box' }}>
                        <div style={{ marginLeft: '20px' }} />
                        <StyledSwitchButton onClick={() => setSelector(1)} isOn={(selector === 1)}>Month</StyledSwitchButton>
                        <StyledSwitchButton onClick={() => setSelector(2)} isOn={(selector === 2)}>Day</StyledSwitchButton>
                    </ButtonGroup>
                </>
                <StyledCalendarBox >
                    <h2>Calendar</h2>
                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        const currentDate = 3;
                        if (item === currentDate) return <Button variant="contained">{item}</Button>
                        return <Button variant="text">{item}</Button>
                    })}

                    <StyledThemeSwitcherBox> some kind of task here </StyledThemeSwitcherBox>
                </StyledCalendarBox>
            </StyledInnerBox>
        </StyledMainBox>
    )
}