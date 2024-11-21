import React, { useState } from 'react';

function Tabs() {
  // Estado para controlar a aba ativa
  const [abaAtiva, setAbaAtiva] = useState('sobre'); // Definimos a aba "sobre" como padrão

  // Funções para renderizar conteúdo de acordo com a aba selecionada
  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case 'sobre':
        return <div>Este é o conteúdo da aba "Sobre". Aqui você pode aprender mais sobre nós.</div>;
      case 'contato':
        return <div>Este é o conteúdo da aba "Contato". Entre em contato conosco através deste formulário.</div>;
      case 'servicos':
        return <div>Este é o conteúdo da aba "Serviços". Descubra os serviços que oferecemos.</div>;
      default:
        return <div>Selecione uma aba para ver o conteúdo.</div>;
    }
  };

  // Função para alterar a aba ativa
  const selecionarAba = (aba) => {
    setAbaAtiva(aba);
  };

  return (
    <div style={styles.container}>
      {/* Barra de abas */}
      <div style={styles.tabs}>
        <div
          style={abaAtiva === 'sobre' ? { ...styles.tab, ...styles.abaAtiva } : styles.tab}
          onClick={() => selecionarAba('sobre')}
        >
          Sobre
        </div>
        <div
          style={abaAtiva === 'contato' ? { ...styles.tab, ...styles.abaAtiva } : styles.tab}
          onClick={() => selecionarAba('contato')}
        >
          Contato
        </div>
        <div
          style={abaAtiva === 'servicos' ? { ...styles.tab, ...styles.abaAtiva } : styles.tab}
          onClick={() => selecionarAba('servicos')}
        >
          Serviços
        </div>
      </div>

      {/* Conteúdo da aba selecionada */}
      <div style={styles.conteudo}>
        {renderizarConteudo()}
      </div>
    </div>
  );
}

// Estilos para o componente
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  abaAtiva: {
    backgroundColor: '#007bff',
    color: 'white',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  },
  conteudo: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minHeight: '200px',
  },
};

export default Tabs;
