import { useState } from "react";

function Nosotros() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="section_nosotros">
      <h2 className="section_nosotros_h2">¿Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>
      <div>
        <button onClick={() => setCounter(counter === 0 ? 0 : counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <p>estudiantes inscritos</p>
    </section>
  );
}

export default Nosotros;