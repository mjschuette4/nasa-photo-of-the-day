import React from "react";
import { button, Badge, ButtonGroup } from 'reactstrap';
import styled from 'styled-components';

const NasaImg = styled.img `
max-width: 100%;
padding: 5%;
`
const NasaButton = styled.button `
margin-bottom: 5%;
margin-right: 5%;
margin-left: 5%;
width: 40%;
background-color: blue;
border-radius: 20px;
color: white;
border: 2px solid grey;
`

const FlipButton = styled.button `

`

const NasaCard= props => {
    return (
        <div key={props.url}>
            <h2>{props.title}</h2>
            <p><Badge>New</Badge>  {props.date}  <Badge>New</Badge></p>
            <div>
            <NasaImg src={props.img}></NasaImg>
            <NasaButton>(:</NasaButton><NasaButton>:)</NasaButton>
            <p>{props.explanation}</p>
            <FlipButton>Flip to Back</FlipButton>
             </div>
        </div>
    );
  };

export default NasaCard;