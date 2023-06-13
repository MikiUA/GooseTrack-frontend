import { useEffect } from "react";
import MuiThemeProvider from "./MUIThemeProvider/MUIThemeProvider";
import { Router } from "./Router/Router";
import useRefreshUser from "hooks/useRefreshUser";

export function App() {
    const {isLoading,refreshUser }= useRefreshUser()
    
    useEffect(()=>{
        const token=localStorage.getItem('refreshToken');
        if (!token) return
        refreshUser();
        //eslint-disable-next-line
    },[])
    return ( isLoading?<>Loading</>:
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    )
}