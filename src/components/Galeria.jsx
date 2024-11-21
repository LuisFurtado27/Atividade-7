import React, { useState } from 'react';

// Lista de imagens de exemplo
const imagens = [
  'https://via.placeholder.com/600x400?text=Imagem+1',
  'https://via.placeholder.com/600x400?text=Imagem+2',
  'https://via.placeholder.com/600x400?text=Imagem+3',
  'https://via.placeholder.com/600x400?text=Imagem+4',
  'https://via.placeholder.com/600x400?text=Imagem+5',
];

function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(null);

  // Função para abrir o modal e exibir a imagem selecionada
  const abrirModal = (imagem, indice) => {
    setImagemSelecionada(imagem);
    setIndiceAtual(indice);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setImagemSelecionada(null);
    setIndiceAtual(null);
  };

  // Funções de navegação entre as imagens
  const proximaImagem = () => {
    if (indiceAtual !== null && indiceAtual < imagens.length - 1) {
      setIndiceAtual(indiceAtual + 1);
      setImagemSelecionada(imagens[indiceAtual + 1]);
    }
  };

  const imagemAnterior = () => {
    if (indiceAtual !== null && indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
      setImagemSelecionada(imagens[indiceAtual - 1]);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Galeria de Imagens</h1>

      {/* Galeria de Imagens */}
      <div style={styles.galeria}>
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            src={imagem}
            alt={`Imagem ${indice + 1}`}
            style={styles.imagem}
            onClick={() => abrirModal(imagem, indice)}
          />
        ))}
      </div>

      {/* Modal de Visualização */}
      {imagemSelecionada && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.fechar} onClick={fecharModal}>X</span>
            <img src={imagemSelecionada} alt="Imagem Ampliada" style={styles.imagemAmpliada} />

            {/* Navegação entre as imagens */}
            <button style={styles.botaoNav} onClick={imagemAnterior} disabled={indiceAtual === 0}>
              Anterior
            </button>
            <button style={styles.botaoNav} onClick={proximaImagem} disabled={indiceAtual === imagens.length - 1}>
              Próxima
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Estilos para o componente
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  galeria: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    justifyItems: 'center',
    marginBottom: '20px',
  },
  imagem: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  imagemHover: {
    transform: 'scale(1.05)',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  fechar: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  imagemAmpliada: {
    width: '500px',
    height: 'auto',
    marginBottom: '20px',
  },
  botaoNav: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px',
    fontSize: '16px',
  },
};

export default Galeria;
