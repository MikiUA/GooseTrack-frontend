import { Box } from "@mui/material";

export const StyledToggleThemeBox = ({ children }) => (
    <Box
        sx={{
            display: 'block',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
            border: '1px solid',
            borderColor: 'palette.primary'
        }}>
        {children}
    </Box>
)

