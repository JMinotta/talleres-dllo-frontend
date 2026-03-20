import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./componentes/Layout";
import Inicio from "./vistas/Inicio";
import Cursos from "./vistas/Cursos";
import Nosotros from "./vistas/Nosotros";
import Login from "./vistas/Login";
import N404 from "./vistas/N404";
import NosotrosTaller3 from "./vistas/NosotrosTaller3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><Inicio /><Cursos /> <Nosotros /></> } />
        <Route path="cursos" element={<><Cursos /> <Nosotros /> </>} />
        <Route path="nosotros" element={<NosotrosTaller3 />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<N404 />} />
      </Route>
    </Routes>
  );
}

export default App;