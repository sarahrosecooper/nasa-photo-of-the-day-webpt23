import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info";
import styled from "styled-components";

const TestDiv = styled.div`
  background-image: url("https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2018%2F02%2Fearlystars.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;
const MainDiv = styled.div`
  margin: 0 auto;
  max-width: 50%;
  overflow: hidden;
`;
function App() {
  return (
    <TestDiv>
      <Header />
      <MainDiv className="App">
        <Info />
      </MainDiv>
    </TestDiv>
  );
}

export default App;
