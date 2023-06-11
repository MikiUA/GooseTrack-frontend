import { useRefreshTokenQuery } from "API/auth-operations";
import MuiThemeProvider from "./MUIThemeProvider/MUIThemeProvider";
import { Router } from "./Router/Router";
import { useEffect } from "react";

export function App() {
    const {data,isLoading}=useRefreshTokenQuery();
    useEffect(()=>{
        if(data && data.token) localStorage.setItem('token', JSON.stringify(data.token));
    },[data]);
    return ( isLoading?<>Loading</>:
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    )
}