import React from "react";
function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    


    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
        }
  
        setLoading(false);
  
        }catch(error) {
          setLoading(false);
          setError(true)
        }
      }, 2000)
    
    }, []);
  
   
    
  
   // let parsedTodos = JSON.parse(localStorageItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  
  }
  
export { useLocalStorage };

/* const defaultTodos = [
  { text: 'Cortar el césped', completed: false },
  { text: 'Limpiar habitacion', completed: false },
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Cenar', completed: true },

  
] 

 localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  
*/