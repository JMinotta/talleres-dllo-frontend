import { useNavigate } from "react-router";

function Inicio() {
  const navigate = useNavigate();

  return (
    <section className="section_inicio">
      <h1>
        Aprende <span>React</span> desde cero
      </h1>
      <p>
        Domina la librería más popular del frontend con proyectos <br />
        prácticos y reales
      </p>
      <button onClick={() => navigate("/cursos")}>Ver Cursos</button>
    </section>
  );
}

export default Inicio;