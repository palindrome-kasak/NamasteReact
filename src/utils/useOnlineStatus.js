import { useState,useEffect } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setonlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setonlineStatus(ture);
        })
    },[]);
    return onlineStatus
}
export default useOnlineStatus