import { NavLink } from "react-router";

function NavBar() {
  return (
    <header>
      <nav className="nav_barra">
        <NavLink to="/" className="nav_titulo">
          ReactAcademy
        </NavLink>
        <ul className="nav_items">
          <li className="nav_item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav_link active" : ""}>
              Inicio
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/cursos" className={({ isActive }) => isActive ? "nav_link active" : ""}>
              Cursos
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? "nav_link active" : ""}>
              Nosotros
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/login" className={({ isActive }) => isActive ? "nav_link nav_link--login active" : "nav_link nav_link--login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;