import React, { useState, useEffect } from "react";

// Função para gerar uma cor hexadecimal aleatória
function gerarCorAleatoria() {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function AlteracaoDeCor() {
  // Estado para armazenar a cor atual do fundo
  const [corFundo, setCorFundo] = useState("#FFFFFF");

  // useEffect para atualizar o fundo da página
  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]); // O efeito é acionado toda vez que corFundo muda

  // Função que altera a cor do fundo para uma cor aleatória
  const mudarCor = () => {
    const novaCor = gerarCorAleatoria();
    setCorFundo(novaCor);
  };

  return (
    <div className="teste">
      <h1>Alterar Cor de Fundo</h1>
      <button onClick={mudarCor}>Mudar Cor</button>
    </div>
  );
}

export default AlteracaoDeCor;
