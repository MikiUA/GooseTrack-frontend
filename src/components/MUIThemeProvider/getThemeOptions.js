const getThemeOptions = (mode) => ({
    palette: {
        mode,
        text: {},
        ...(mode === 'dark') ? {
            primary: {
                main: '#3e85f3',
            },
            background: {
                default: '#171820',
                paper: '#21222C',
                sidebar: "#13151A",
            },
            borderGray: '#FFFFFF26',
            customLightBlueButton: {},//Leave this or Errors will arise
        } : {
            background: {
                default: '#F7F6F9',
                paper: '#FFFFFF',
                sidebar: '#FFFFFF',
            },
            borderGray: '#DCE3E5CC',
            customLightBlueButton: {
                background: '#e3f3ff',
                lighter: '#efffff',
                text: '#3e85f3'
            }
        }
    },
    components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    backgroundColor: (props) => props.theme.palette.background.default,
                    color: (props) => props.theme.palette.text.primary,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.MuiButton-contained': {
                        backgroundColor: '#3e85f3', // Set the desired background color for contained buttons
                        color: '#ffffff', // Set the default color value for contained buttons
                    },
                    '&.MuiButton-text': {
                        color: (props) => props.theme.palette.text.primary, // Set the default color value for contained buttons
                    },
                },
            },
        },
    },
});

export default getThemeOptions