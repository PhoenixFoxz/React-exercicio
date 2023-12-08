import styled from "styled-components";
import Menu from "./Menu";

const StyledCabecalho = styled.header`
  background-image: url(../assets/backheader.jpg);
  background-attachment: fixed;
  background-size: cover;
`;

const StyledLogo = styled.img`
  text-align: center;
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <StyledLogo
        src="https://freepngimg.com/download/logo/104929-shadows-sekiro-twice-die-photos-logo.png"
        alt="Logo do Jogo Sekiro"
      />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
