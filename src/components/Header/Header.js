import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  min-height: 10px;
  max-width: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 5px;
`;

const TextDiv = styled.div`
  display: flex;
  
  font-family: "Times New Roman";
  font-size: 3rem;
  justify-content: center;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <TextDiv>nasa photo of the day</TextDiv>
    </HeaderDiv>
  );
};

export default Header;
