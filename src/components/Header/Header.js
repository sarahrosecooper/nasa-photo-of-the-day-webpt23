import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  min-height: 105px;
  background-color: pink;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const TextDiv = styled.div`
  display: flex;
  margin-top: 5%;
  font-family: "Times New Roman";
  font-size: 3rem;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <TextDiv>nasa photo of the day</TextDiv>
    </HeaderDiv>
  );
};

export default Header;
