import React from 'react'
import './EmptyTodos.css'
import { TypeAnimation } from 'react-type-animation'

 function EmptyTodos(){
  return (
    <div className="empty-todos">
       <TypeAnimation
          sequence={[
            'Crea tu primera tarea', 
          ]}
          wrapper="span"
          speed={50}
          className="empty-typing" // Clase para personalizar el estilo de la animación
          repeat={2}
          
        />
    </div>
   
  )
}

export { EmptyTodos }