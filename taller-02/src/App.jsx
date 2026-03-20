import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Inicio />
        <Cursos />
        <Nosotros />
      </main>
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <header>
      <nav className="nav_barra">
        <h2 className="nav_titulo">ReactAcademy</h2>
        <ul className="nav_items">
          <li className="nav_item">Inicio</li>
          <li className="nav_item">Cursos</li>
          <li className="nav_item">Nosotros</li>
        </ul>
      </nav>
    </header>
  );
}

function Inicio() {
  return (
    <section className="section_inicio">
      <h1>
        Aprende <span>React</span> desde cero
      </h1>
      <p>
        Domina la libreria más popular del frontend con proyectos <br />{" "}
        prácticos y reales
      </p>
      <button>Ver Cursos</button>
    </section>
  );
}

function Cursos() {
  return (
    <section className="section_cursos">
      <h2>Nuestros Cursos</h2>
      <p className="section_p">Elige el camino que mejor se adapte a ti</p>
      <div>
        <article>
          <span>⚛️</span>
          <h3>React Básico</h3>
          <p className="p_articles">
            Componentes, props, estado y eventos. Todo lo que necesitas para
            empezar.
          </p>
          <button>Principiante</button>
        </article>
        <article>
          <span>🔁</span>
          <h3>React Hooks</h3>
          <p className="p_articles">
            Profundiza en useState, useEffect y crea tus propios custom hooks.
          </p>
          <button>Intermedio</button>
        </article>
        <article>
          <span>📁</span>
          <h3>Estado Global</h3>
          <p className="p_articles">
            Gestiona el estado con Context API y aprende cuándo usarlo.
          </p>
          <button>Intermedio</button>
        </article>
        <article>
          <span>🚀</span>
          <h3>React Avanzado</h3>
          <p className="p_articles">
            Rendimiento, patrones avanzados y arquitectura para proyectos
            grandes.
          </p>
          <button>Avanzado</button>
        </article>
      </div>
    </section>
  );
}

function Nosotros() {
  const [counter, setCounter] = useState(0);
  return (
    <section className="section_nosotros">
      <h2>Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>
      <div>
        <button onClick={() => setCounter(counter==0 ? 0: counter -1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <p>estudiantes inscritos</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p class="footer_texto">
        © 2026 <span>ReactAcademy</span>. Taller 02 — React Fundamentos.
      </p>
    </footer>
  );
}

export default App;