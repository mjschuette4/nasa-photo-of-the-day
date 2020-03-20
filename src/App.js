import React, { useEffect, useState } from "react";
import "./App.css";
import NasaData from "./NasaData";
import styled from 'styled-components';

const NasaDiv = styled.div `

`

function App() {
  return (
    <NasaDiv className='App'>
      <NasaData />
    </NasaDiv>
  );
}

export default App;
