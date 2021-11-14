import React, { useState } from 'react';

// Componente Funcional
function Funcional() {
  
  // const [variable, funcion] = useState('valor inicial');
  const [contador, setContador] = useState(0);

  return (
    <>
      <h3>Valor del contador {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>
        +
      </button>
      <button onClick={() => setContador(contador - 1)}>
        -
      </button>
      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </>
  )
}

export default Funcional;
