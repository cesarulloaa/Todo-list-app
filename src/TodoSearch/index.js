import React from "react";

import "./TodoSearch.css"
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <div className="input-container">
      <input placeholder="Hacer tarea"
      value={searchValue}
      onChange={(event) => {
        console.log('Escribiste en el ToDo search');
        setSearchValue(event.target.value)
 
      }} 
      
      />
    </div>
    
  )
}

export {TodoSearch};
