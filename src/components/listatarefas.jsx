import React, { useState } from "react";

function App() {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState("todos"); // 'todos', 'pendentes', 'concluidas'

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      const novaTarefaObj = {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setNovaTarefa(""); // Limpa o campo de input
    }
  };

  // Função para remover uma tarefa
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Função para marcar uma tarefa como concluída ou não
  const toggleTarefaConcluida = (id) => {
    setTarefas(tarefas.map((tarefa) => (tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa)));
  };

  // Função para filtrar as tarefas com base no filtro
  const filtrarTarefas = () => {
    if (filtro === "pendentes") {
      return tarefas.filter((tarefa) => !tarefa.concluida);
    } else if (filtro === "concluidas") {
      return tarefas.filter((tarefa) => tarefa.concluida);
    }
    return tarefas; // 'todos'
  };

  return (
    <div style={styles.container}>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={adicionarTarefa} style={styles.button}>
        Adicionar
      </button>

      <div style={styles.filtros}>
        <button onClick={() => setFiltro("todos")} style={styles.button}>
          Todos
        </button>
        <button onClick={() => setFiltro("pendentes")} style={styles.button}>
          Pendentes
        </button>
        <button onClick={() => setFiltro("concluidas")} style={styles.button}>
          Concluídas
        </button>
      </div>

      <ul style={styles.lista}>
        {filtrarTarefas().map((tarefa) => (
          <li key={tarefa.id} style={styles.item}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => toggleTarefaConcluida(tarefa.id)}
              style={styles.checkbox}
            />
            <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>{tarefa.texto}</span>
            <button onClick={() => removerTarefa(tarefa.id)} style={styles.removeButton}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos simples para o aplicativo
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    width: "300px",
    margin: "0 auto",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    width: "80%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    marginTop: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  filtros: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "10px",
  },
  lista: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
    width: "100%",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "8px",
    borderBottom: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "5px",
  },
  checkbox: {
    marginRight: "10px",
  },
  removeButton: {
    backgroundColor: "#ff4c4c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;
