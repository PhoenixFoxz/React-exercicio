import { NavLink } from "react-router-dom";
import { StyledNav } from "../styles/styles";

function Menu() {
  return (
    <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Bosses">Bosses</NavLink>
        <NavLink to="/Personagens">Personagens</NavLink>
    </StyledNav>
  );
}

export default Menu;
