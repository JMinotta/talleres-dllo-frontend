import { useNavigate } from "react-router";

function N404() {
  const navigate = useNavigate();

  return (
    <section className="section_404">
      <h2>404</h2>
      <p>La página que buscas no existe.</p>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </section>
  );
}

export default N404;