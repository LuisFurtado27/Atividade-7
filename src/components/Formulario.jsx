import React, { useState } from "react";
import BoasVindas from "./BoasVindas";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [submetido, setSubmetido] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    setErro("");
    setSubmetido(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nome") setNome(value);
    else if (name === "email") setEmail(value);
    else if (name === "senha") setSenha(value);
  };

  return (
    <div style={styles.container}>
      {!submetido ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <h1>Formulário de Registro</h1>
          {erro && <p style={styles.erro}>{erro}</p>}

          <input
            type="text"
            name="nome"
            value={nome}
            onChange={handleInputChange}
            placeholder="Nome"
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="E-mail"
            style={styles.input}
          />
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={handleInputChange}
            placeholder="Senha"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Registrar
          </button>
        </form>
      ) : (
        <BoasVindas nome={nome} />
      )}
    </div>
  );
}

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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  erro: {
    color: "red",
    marginBottom: "10px",
  },
};

export default Formulario;
