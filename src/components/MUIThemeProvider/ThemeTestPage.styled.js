const { styled, Box, Button } = require("@mui/material");

export const StyledMainBox = styled(Box)(({ theme }) => `
    width:100vw;
    height:100vh;
    display:flex;
`)

export const StyledSidebarBox = styled(Box)(({ theme }) => `
    box-sizing:border-box;
    border-left: 1px solid ${theme.palette.borderGray};
    width:35%;
    background-color:${theme.palette.background.sidebar};
    color:${theme.palette.text.primary}
`)

export const StyledInnerBox = styled(Box)(({ theme }) => `
    flex-grow:1;
    background-color:${theme.palette.background.default};
    padding:1%;
`)

export const StyledCalendarBox = styled(Box)(({ theme }) => `
    box-sizing:border-box;
    border: 2px solid ${theme.palette.borderGray};
    margin: 60px 29px; padding:1%;
    height:60%;
    background-color:${theme.palette.background.paper};
    color:${theme.palette.text.primary};
`)

export const StyledThemeSwitcherBox = styled(Box)(({ theme }) => `
    display: block;
    box-sizing: border-box;
    border-radius: 1;
    border: 1px solid ${theme.palette.borderGray};

    width: 90%;
    margin: 10px auto;
    padding: 10px;

    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
`)

const StyledOnButton = styled(Button)(({ theme }) => `
    &:disabled {
        background-color:${theme.palette.customLightBlueButton.background};
        color:${theme.palette.customLightBlueButton.text};
    }
`)

const StyledOffButton = styled(Button)(({ theme }) => `
    color:${(theme.palette.mode === 'dark' ? 'white' : 'gray')};
`)

export const StyledOnOffButton = ({ isOn = false, ...rest }) => isOn
    ? <StyledOnButton variant="contained" disabled {...rest} />
    : <StyledOffButton variant="text" {...rest} />


const StyledOnSwitchButton = styled(Button)(({ theme }) => `
    width:50%;
    &:disabled {
        border:none;
        ${theme.palette.mode === 'light' ? `
        /* Styles for light mode */
            background-color: #C0E0Ff;
            color: ${theme.palette.customLightBlueButton.text};
        ` : `
        /* Styles for dark mode */
            background-color: ${theme.palette.primary.main};
            color: ${theme.palette.text.primary};
    `}
    }
`)
const StyledOffSwitchButton = styled(Button)(({ theme }) => `
    width:50%;
    border:none;
    box-sizing:border-box;
    background-color:${(theme.palette.mode === 'light') ? theme.palette.customLightBlueButton.background : theme.palette.background.paper};
    color:${theme.palette.customLightBlueButton.text};
`)
export const StyledSwitchButton = ({ isOn = false, ...rest }) => isOn
    ? <StyledOnSwitchButton disabled {...rest} />
    : <StyledOffSwitchButton {...rest} />

