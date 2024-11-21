import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importando os componentes
import Contador from "./components/contador";
import Alteracor from "./components/Alteracor";
import ListaTarefas from "./components/ListaTarefas";
import Temporizador from "./components/Temporizador";
import Filtro from "./components/Filtro";
import Formulario from "./components/Formulario";
import PostList from "./components/PostList";
import Galeria from "./components/Galeria";
import Timer from "./components/Timer";
import Tabs from "./components/tabs";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1>Atividade 7 Modulo 4 - React</h1>

        {/* Menu de navegação */}
        <nav style={styles.menu}>
          <ul>
            <li>
              <Link to="/contador" style={styles.link}>
                Exercicio 1 - Contador
              </Link>
            </li>
            <li>
              <Link to="/alteracor" style={styles.link}>
                Exercicio 2 - Alterar Cor
              </Link>
            </li>
            <li>
              <Link to="/lista-tarefas" style={styles.link}>
                Exercicio 3 - Lista de Tarefas
              </Link>
            </li>
            <li>
              <Link to="/temporizador" style={styles.link}>
                Exercicio 4 -Temporizador
              </Link>
            </li>
            <li>
              <Link to="/filtro" style={styles.link}>
                Exercicio 5 - Filtro
              </Link>
            </li>
            <li>
              <Link to="/formulario" style={styles.link}>
                Exercicio 6 - Formulário
              </Link>
            </li>
            <li>
              <Link to="/postlist" style={styles.link}>
                Exercicio 7 -PostList
              </Link>
            </li>
            <li>
              <Link to="/galeria" style={styles.link}>
                Exercicio 8 -Galeria
              </Link>
            </li>
            <li>
              <Link to="/timer" style={styles.link}>
                Exercicio 9 - Timer
              </Link>
            </li>
            <li>
              <Link to="/tabs" style={styles.link}>
                Exercicio 10 -Tabs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Área de conteúdo */}
        <div style={styles.content}>
          <Routes>
            <Route path="/contador" element={<Contador />} />
            <Route path="/alteracor" element={<Alteracor />} />
            <Route path="/lista-tarefas" element={<ListaTarefas />} />
            <Route path="/temporizador" element={<Temporizador />} />
            <Route path="/filtro" element={<Filtro />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/postlist" element={<PostList />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/tabs" element={<Tabs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  menu: {
    margin: "20px 0",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    margin: "0 10px",
  },
  content: {
    marginTop: "20px",
  },
};

export default App;
