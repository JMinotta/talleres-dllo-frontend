import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = email.trim() === "" || password.trim() === "";

  const handleSubmit = () => {
    if (!isEmpty) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section_login">
      <div className="login_card">
        <h2>Iniciar Sesión</h2>
        <p className="login_cositas">
          Solo interfaz — no valida credenciales reales
        </p>

        <div className="login_form">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitted}
          />

          <button
            className="login_btn"
            onClick={handleSubmit}
            disabled={isEmpty || submitted}
          >
            {submitted ? "Enviado" : "Ingresar"}
          </button>

          {submitted && (
            <p className="login_success">
              Formulario enviado correctamente (simulado).
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;