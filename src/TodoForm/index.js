import React from "react";
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        addTodo(newTodoValue);
        event.preventDefault();
        setOpenModal(false)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <form onSubmit={onSubmit}>
        <label>Escribe to primer TODO</label>
        <textarea placeholder="Limpiar habitacion" 
        value={newTodoValue}
        onChange={onChange}
        
        />

        <div className="TodoForm-buttonContainer">
            <button type="button" onClick={onCancel} className="TodoForm-button--cancel">Cancelar</button>
            <button type="submit" className="TodoForm-button--add">Añadir</button>
        </div>
    </form>
    )
}

export { TodoForm }