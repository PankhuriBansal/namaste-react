import { useEffect} from "react"
import { useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);   //for automatic change in the status i will use the state with initial value as true
    
    useEffect (()=>{   //we use useEffect to make the code run once to update the status by writing an empty dependency array
        const handleOnline = () => {   //extracting the isOnLine function to remove addEventListener
            setIsOnline(true)
        };
       const handleOffline = () => {   //extra function for setting functionality as we need to change it later to remove this 
            setIsOnline(false)
       };
        window.addEventListener("online", handleOnline) //if we are online this will run
        window.addEventListener("offline", handleOffline); //if we are offline this will run
        
        return () => {  //to remove listeners 
            window.removeEventListener("online", handleOnline)   //using remove.. and handleOnline function to remove the window.eventlistener in the end 
            window.removeEventListener("offline",handleOffline)
        };
        },[]);  

    // //logic for status in js code
    // window.addEventListener("online",() => {  //set eventlistener only once when we need to load our page 
    //     //this code will trigger whenever we will go online 
    // })
    
    return isOnline  //should return isOnline which is a boolean, return true when i am online and false when i am offline
};

export default useOnline;