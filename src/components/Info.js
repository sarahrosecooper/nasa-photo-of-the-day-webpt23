import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const StyledImg = styled.img
`
max-width: 100%;
max-height: 40%;
margin: 0 auto;



`

const ContentDiv = styled.div 
`
border: 1px solid pink;
margin-top: 3px;
padding: 15px;
background-color: white;
margin-bottom: 20px;
`
const Info = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QoDbapLvaex2YBs640JeZpDeplKCR1vLoOdGrUUc"
      )
      .then((response) => {
        console.log("succesful", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("failed", error);
      });
  }, []);

  return (
    <div>
       
      <StyledImg src={data.url} />
      
      <br></br>
      <ContentDiv>
      copyright: {data.copyright}
      <br></br>
      {data.date}
      <br></br>
      {data.explanation}
      </ContentDiv>
    </div>
  );
};

export default Info;
