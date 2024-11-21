import React, { useState, useEffect } from "react";

function Temporizador() {
  // Estado para armazenar o tempo em segundos
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false); // Determina se o temporizador está ativo ou pausado

  useEffect(() => {
    // Inicia o temporizador quando o componente for montado ou quando o temporizador for ativado
    let intervalo;

    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000); // Atualiza a cada segundo
    } else {
      clearInterval(intervalo); // Limpa o intervalo quando o temporizador for pausado
    }

    // Limpa o intervalo quando o componente for desmontado ou quando o temporizador for pausado
    return () => clearInterval(intervalo);
  }, [ativo]); // O efeito depende do estado 'ativo'

  const pausar = () => {
    setAtivo(false); // Pausa o temporizador
  };

  const reiniciar = () => {
    setAtivo(false); // Pausa o temporizador
    setTempo(0); // Reinicia o tempo
  };

  const iniciar = () => {
    setAtivo(true); // Inicia o temporizador
  };

  return (
    <div style={styles.container}>
      <h1>Temporizador</h1>
      <p style={styles.tempo}>{tempo} segundos</p>

      <div style={styles.botoes}>
        {!ativo ? (
          <button onClick={iniciar} style={styles.button}>
            Iniciar
          </button>
        ) : (
          <button onClick={pausar} style={styles.button}>
            Pausar
          </button>
        )}
        <button onClick={reiniciar} style={styles.button}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

// Estilos simples para o componente
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
  },
  tempo: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  botoes: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Temporizador;
