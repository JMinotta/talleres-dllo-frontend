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

export default Cursos;