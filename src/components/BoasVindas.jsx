import React from "react";

function BoasVindas({ nome }) {
  return (
    <div style={styles.boasVindas}>
      <h2>Bem-vindo, {nome}!</h2>
      <p>Seu registro foi realizado com sucesso.</p>
    </div>
  );
}

// Estilos do componente de boas-vindas
const styles = {
  boasVindas: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#e0f7fa",
    borderRadius: "8px",
    width: "300px",
    margin: "50px auto",
  },
};

export default BoasVindas;
