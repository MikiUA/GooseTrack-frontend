import { useEffect, useState } from "react";

export default function useLocalStorage(key,initialValue){
    const [item,setItem]=useState(localStorage.getItem(key)||initialValue);
    useEffect(()=>{
        localStorage.setItem(key,item);
    },[key,item])
    return [item,setItem];
}