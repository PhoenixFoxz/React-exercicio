import { StyledCabecalho, StyledLogo } from "../styles/styles";
import Menu from "./Menu";

function Cabecalho() {
  return (
    <header>
        <StyledCabecalho>
          <StyledLogo>
            <img
              src="https://freepngimg.com/download/logo/104929-shadows-sekiro-twice-die-photos-logo.png"
              alt="Logo do Jogo Sekiro"
            />
          </StyledLogo>
          <Menu />
        </StyledCabecalho>
    </header>
  );
}

export default Cabecalho;
