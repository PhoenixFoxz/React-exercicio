import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Bosses from "./pages/Bosses";
import Personagens from "./pages/Personagens";
import styled from "styled-components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Bosses} path="/Bosses" />
            <Route Component={Personagens} path="/Personagens" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
