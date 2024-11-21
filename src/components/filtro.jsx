import React, { useState } from 'react';

function FiltroLista() {
  // Lista de nomes para exibir
  const nomes = ['Ana', 'Carlos', 'Beatriz', 'Fernanda', 'Lucas', 'Juliana', 'Ricardo', 'Vanessa'];

  // Estado para controlar o valor do filtro
  const [filtro, setFiltro] = useState('');

  // Função para lidar com a alteração do valor do filtro
  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  // Filtra a lista de nomes, ignorando maiúsculas e minúsculas
  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Filtro de Lista</h1>
      
      <input
        type="text"
        value={filtro}
        onChange={handleFiltroChange}
        placeholder="Filtrar nomes"
        style={styles.input}
      />
      
      <ul style={styles.lista}>
        {nomesFiltrados.map((nome, index) => (
          <li key={index} style={styles.item}>
            {nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos básicos para o componente
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    width: '300px',
    margin: '50px auto',
    textAlign: 'center',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    width: '80%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
    width: '100%',
  },
  item: {
    backgroundColor: '#fff',
    padding: '8px',
    borderBottom: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '5px',
  },
};

export default FiltroLista;
