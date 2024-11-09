import React from 'react'
import './TodoLoading.css'
import { TypeAnimation } from 'react-type-animation'

function TodoLoading() {
    return (
      <div className="loading-container">  {/* Agrega un contenedor para mejor control de estilos */}
        <TypeAnimation
          sequence={[
            'Cargando...', 
          ]}
          wrapper="span"
          speed={50}
          className="typing" // Clase para personalizar el estilo de la animación
          repeat={2}
          
        />
      </div>
    );
  }

export { TodoLoading }