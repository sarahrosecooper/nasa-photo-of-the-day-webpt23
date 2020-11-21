import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info";
import styled from "styled-components";

const MainDiv = styled.div`
  margin: 0 auto;
  max-width: 75%;
`;
function App() {
  return (
    <MainDiv className="App">
      <Header />
      <Info />
    </MainDiv>
  );
}

export default App;
