import MuiThemeProvider from "./MUIThemeProvider/MUIThemeProvider";
import { Router } from "./Router/Router";

export function App() {
    return (
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    )
}