import { useEffect, useState } from "react"

const usePersistedState = (defaultValue, key) => {
    const [value,setValue] = useState(() => {
         const item = localStorage.getItem(key);
         if(item === null) return defaultValue;
         try{
            return JSON.parse(item);
         }
         catch(error){
            return defaultValue;
         }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value,setValue];
};
export default usePersistedState;