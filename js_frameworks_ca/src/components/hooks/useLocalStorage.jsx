import { useState, useEffect } from "react";
//takes in a key and an initial value. This hook returns an array containing the current value and a function to update it. Initial value for the data in case not yet present 
function useLocalStorage(key,initialValue){
    //The useState hook is used to define the storedValue state variable, which is initialized with the value of the key in localStorage if it exists, or with the initialValue if it does not. 
    //The hook also defines the setStoredValue function, which is used to update the value of storedValue in both the component's state and the localStorage.
    /* const [storedValue,setStoredValue] = useState(() =>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch(error){
            console.error(error);
            return initialValue;
        }
    }); */
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
    //The `setValue` function is defined as a wrapper around `setStoredValue`, with additional logic that handles updating the `localStorage`. 
    //If the value passed to `setValue` is a function, it is called with the current value of `storedValue` as its argument. Otherwise, the value is used directly. 
    //The `valueToStore` variable is then set to the result of the function call or the value itself. 
    //The new value of `storedValue` is set with `setStoredValue`, and the `valueToStore` is stored in the `localStorage`.
    /* const setValue = (value) => {
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch(error){
            console.error(error);
        }
    }; */
    //The `removeValue` function is defined to remove the value from the `localStorage`. It sets the value of `storedValue` to null and removes the item from the `localStorage`.
    const removeValue = () => {
        try{
            window.localStorage.removeItem(key);
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue, key]);

    //Finally, the hook returns an array of `[storedValue, setValue, removeValue]`, which can be used to access and manipulate the stored value. The first element of the array is the current value of `storedValue`, the second element is the `setValue` function, and the third element is the `removeValue` function. This allows the component to get, set, and remove the data from `localStorage` using a simple and standardized interface.
    return [storedValue,setValue,removeValue];
}
export default useLocalStorage;