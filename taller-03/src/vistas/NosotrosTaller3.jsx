function NosotrosTaller3() {
  return (
    <section className="section_cursos" style={{minHeight:"calc(100vh - 70.4px - 87px)", background:"linear-gradient(135deg, #0f172a 0%, #0f2444 100%)"}}>
      <h2 style={{color:"white"}}>Sobre Nosotros</h2>
      <p className="section_p">Conoce quiénes somos y qué nos mueve</p>
      <div>
        <article>
          <span>🎯</span>
          <h3>Misión</h3>
          <p className="p_articles">
            Hacer el aprendizaje de React accesible para todos, con contenido
            práctico y proyectos del mundo real.
          </p>
          <button style={{width:"100%"}}>Quiénes somos</button>
        </article>
        <article>
          <span>🔭</span>
          <h3>Visión</h3>
          <p className="p_articles">
            Ser la academia de referencia en español para developers que quieren
            dominar el ecosistema frontend moderno.
          </p>
          <button style={{width:"100%"}}>Hacia dónde vamos</button>
        </article>
        <article>
          <span>🤝</span>
          <h3>Comunidad</h3>
          <p className="p_articles">
            Más de 500 estudiantes aprendiendo juntos, compartiendo proyectos y
            creciendo como developers.
          </p>
          <button style={{width:"100%"}}>Únete</button>
        </article>
      </div>
    </section>
  );
}

export default NosotrosTaller3;
