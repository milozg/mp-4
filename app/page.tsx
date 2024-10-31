"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100vw;
    min-height : 100vh;
    background-color : #f6f7eb;
    color : #393e41;
`;

const StyledLink = styled(Link)`
    color : #e94f37;
    border : 5px solid #393e41;
    border-radius : 5px;
    background : #393e41;
    margin : 3vh;
    padding : 2vh;
`;


export default function Home() {

  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <input type = "text" value = {city} placeholder = "City name" onChange={(e) => setCity(e.target.value)}/>
      <StyledLink href = {`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}
