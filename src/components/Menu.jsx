import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Bosses">Bosses</NavLink>
      <NavLink to="/Personagens">Personagens</NavLink>
    </nav>
  );
}

export default Menu;
