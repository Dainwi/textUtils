import React, { useState } from "react";

export const TextForms = (props) => {
    const [text, setText] = useState('');

    function upperCase(){
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    function lowerCase(){
        let newText = text.toLowerCase();
        setText(newText);
    }

    function clere(){
        setText('');
    }

    function change(event){
        setText(event.target.value);
    }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea className="form-control" rows="8" value={text} onChange={change}></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary m-3" onClick={upperCase}>Converte to Uppercase</button>
        <button className="btn btn-outline-primary m-3" onClick={lowerCase}>Converte to Lowercase</button>
        <button className="btn btn-outline-danger m-3" onClick={clere}>Reset</button>
      </div>
      <div className="container">
        <h2>Analyaz Your word</h2>
        <p>{text.split(" ").length-1} words & {text.length} charecters</p>
      </div>

    </>
  );
};
