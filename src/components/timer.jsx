import React, { useState, useEffect } from "react";

function Timer() {
  // Estado para o tempo restante
  const [tempo, setTempo] = useState(0);
  const [iniciado, setIniciado] = useState(false); // Se o timer foi iniciado
  const [intervalo, setIntervalo] = useState(null); // Para armazenar o ID do setInterval
  const [tempoInicial, setTempoInicial] = useState(0); // Armazena o tempo inicial para reiniciar

  // Função para iniciar o timer
  const iniciarTimer = () => {
    if (tempo <= 0) return; // Não faz nada se o tempo for 0 ou negativo
    setIniciado(true);
    setTempoInicial(tempo); // Armazena o tempo inicial para reiniciar depois
    const idIntervalo = setInterval(() => {
      setTempo((prevTempo) => {
        if (prevTempo <= 1) {
          clearInterval(idIntervalo); // Para o intervalo quando chegar a zero
          alert("O tempo acabou!");
          return 0;
        }
        return prevTempo - 1;
      });
    }, 1000); // Diminui 1 segundo a cada 1000ms (1 segundo)
    setIntervalo(idIntervalo); // Armazena o intervalo para poder limpar depois
  };

  // Função para pausar o timer
  const pausarTimer = () => {
    setIniciado(false);
    clearInterval(intervalo); // Limpa o intervalo
  };

  // Função para reiniciar o timer
  const reiniciarTimer = () => {
    setIniciado(false);
    clearInterval(intervalo); // Limpa o intervalo
    setTempo(tempoInicial); // Restaura o tempo inicial
  };

  // UseEffect para limpar o intervalo se o componente for desmontado ou o timer for pausado
  useEffect(() => {
    return () => {
      clearInterval(intervalo); // Limpa o intervalo caso o componente seja desmontado
    };
  }, [intervalo]);

  return (
    <div style={styles.container}>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          disabled={iniciado} // Desabilita a edição quando o timer está em andamento
          style={styles.input}
        />
        <span> segundos</span>
      </div>
      <div style={styles.contador}>
        <h2>{tempo} segundos restantes</h2>
      </div>
      <div style={styles.botoes}>
        {!iniciado ? (
          <button onClick={iniciarTimer} style={styles.botao}>
            Iniciar
          </button>
        ) : (
          <button onClick={pausarTimer} style={styles.botao}>
            Pausar
          </button>
        )}
        <button onClick={reiniciarTimer} style={styles.botao}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

// Estilos para o componente
const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "100px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  contador: {
    margin: "20px 0",
  },
  botoes: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  botao: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Timer;