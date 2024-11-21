import React, { useState } from 'react';

function Contador() {
  // Inicializando o estado do contador com o valor 0
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para decrementar o contador, mas sem permitir valores negativos
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
