import React from "react";
import memesData from "../memesData.js";

export default function Form() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.round(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    return url;
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="inputs">
          <input type="text" placeholder="Top Text"></input>
          <input type="text" placeholder="Bottom Text"></input>
        </div>
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <img src={getMemeImage()} width="400px" />
    </div>
  );
}
