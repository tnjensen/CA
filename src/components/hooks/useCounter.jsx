import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useCounter(initialValue,key){
    const [counter,setCounter] = useLocalStorage("count", 0);
    
    const [storedValue,setValue] = useState(() => {
        const item = localStorage.getItem(key);
        if(item === null || item === undefined) return initialValue;
        try{
            return JSON.parse(item);
        }
        catch(error){
           return initialValue;
        }
   });
    const removeValue = () => {
        try{
            window.localStorage.removeItem(key);
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    }
    return [counter, setCounter, storedValue,setValue, removeValue];
}
export default useCounter;