import React from 'react'

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodoForm } from '../TodoForm'
import { TodoLoading } from '../TodoLoading';
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';



export default function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {() => (
                    <TodoList>
                    {loading && <TodoLoading /> }
                    {error && <TodosError /> }
                    {(!loading && searchedTodos.length === 0 ) && <EmptyTodos /> }
    
                  {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
                )}
            </TodoContext.Consumer>
            
            <CreateTodoButtom setOpenModal={setOpenModal} />

            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}


    
       
        </>
      );
}

