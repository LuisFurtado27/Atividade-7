import React, { useState, useEffect } from "react";

function PostList() {
  // Estado para armazenar os posts, status de carregamento e erro
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // Função para realizar a requisição dos posts
  const fetchPosts = async () => {
    setCarregando(true);
    setErro(""); // Limpa qualquer erro anterior

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Falha ao carregar os dados");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  // Realizar a requisição quando o componente for montado
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Lista de Posts</h1>
      {erro && <p style={styles.erro}>{erro}</p>}

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id} style={styles.item}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <button onClick={fetchPosts} style={styles.button}>
            Recarregar Posts
          </button>
        </div>
      )}
    </div>
  );
}

// Estilos para o componente
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
  },
  erro: {
    color: "red",
  },
  item: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default PostList;
