import React from "react";
import styled from "styled-components";
import AssideWrapper from "./components/asside/AssideWrapper";
import MainChat from "./components/main/MainChat";

const AppWrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  background: grey;
  grid-template-areas:
    "header header"
    "asside main"
    "asside main";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
`;

function App() {
  return (
    <AppWrapper>
      <AssideWrapper></AssideWrapper>
      <MainChat></MainChat>
    </AppWrapper>
  );
}

export default App;
