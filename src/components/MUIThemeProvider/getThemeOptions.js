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
            customLightBlueButton: {
                background: '#3E85F3',
                text: '#fff'
            },
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
        MuiTextField: {
            styleOverrides: ({
                root: {
                    backgroundColor: mode === 'light' ? '#FFFFFF' : '#21222C',
                },
            }),
        },
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
        // overrides: {
        //     MuiTextField: {
        //         root: {
        //             '& .MuiInputBase-root': {
        //                 backgroundColor: 'inherit',
        //                 color: 'inherit',
        //             },
        //             '& .MuiInputBase-input': {
        //                 caretColor: 'inherit',
        //             },
        //             '& .MuiInputLabel-root': {
        //                 color: 'inherit',
        //             },
        //             '& .MuiOutlinedInput-root': {
        //                 '& fieldset': {
        //                     borderColor: 'inherit',
        //                 },
        //                 '&:hover fieldset': {
        //                     borderColor: 'inherit',
        //                 },
        //                 '&.Mui-focused fieldset': {
        //                     borderColor: 'inherit',
        //                 },
        //             },
        //         },
        //     }
        // },
    },
});

export default getThemeOptions