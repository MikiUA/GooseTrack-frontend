const getThemeOptions = (mode) => ({
    palette: {
        mode,
        text: {},
        ...(mode === 'dark') ? {
            text: {
                primary: '#ffffff' // Set the text color for dark mode
            },
        } : {
            text: {
                primary: '#000000' // Set the text color for light mode
            },
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#ffffff', // Set the default color value
                },
            },
        },
    },
});

export default getThemeOptions