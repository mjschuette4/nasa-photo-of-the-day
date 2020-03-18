import React from "react";

const NasaCard= props => {
    return (
      <div className="" key={props.url}>
        <h2>Title: {props.title}</h2>
        <p>Date: {props.date}</p>
        <div className="">
          <img src={props.img}></img>
          <p>{props.explanation}</p>
        </div>
      </div>
    );
  };

export default NasaCard;