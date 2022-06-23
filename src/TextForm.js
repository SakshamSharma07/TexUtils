import React, { useState } from "react";
export default function TextForm(props) {

  const handleOnClick1 = () => {
    console.log("uppercase was clicked " + text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
  };

  const handleOnClick2 = () => {
    console.log("Lowercase was clicked " + text);
    let newTxt = text.toLowerCase();
    setText(newTxt);
  };

  const handleOnClick3 = () => {
    console.log("Capitalise was clicked" + text);
    let str = text;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    const str2 = arr.join(" ");
    setText(str2);
  };

  const handleOnClick4 = () => {
    console.log("clear screen was clicked");
    let newTxt = "";
    setText(newTxt);
  };
  
  const handleOnClick5 = () => {
    console.log("copy text was clicked");
    if (text2 === "Copy Text") {
      document.getElementById("exampleFormControlTextarea1").select();
      setText2("Text Copied");
      navigator.clipboard.writeText(text);
      setButton("success");
    } else {
      setText2("Copy Text");
      setButton("primary");
    }
  };
  const handleOnClick6 = () => {
    console.log("Remove Extra Space was clicked");
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const textCounter = () => {
    console.log("text count");
    textCount=text.split(" ");
    textCount.pop();
    textCount.length();
  };

  const [textCount,setCount]=useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("Copy Text");
  const [buttonState, setButton] = useState("primary");

  return (
    <>
      <div className="container"  >
        <h1 style={{color: props.mode==='dark'?'#308D46':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{backgroundColor: props.mode==='dark'? '#222221': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            className="form-control my-3" 
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleOnClick1}>
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClick2}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnClick3}
        >
          Capitalise
        </button>

        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleOnClick6}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClick4}
        >
          Clear Text
        </button>

        <button
          type="button"
          className={`btn btn-${buttonState} `}
          onClick={handleOnClick5}
        >
          {text2}
        </button>

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="my-3" style={{color: props.mode==='dark'?'#308D46':'black'}}>
            Text Summary
        </h1>
        <div className="conatiner border ps-2" 
        style={{backgroundColor: props.mode==='dark'? '#222221': 'white'}}>
        <h4 className="my-3">
        Total words = {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}
        </h4>
        <h4>
        Total Characters = {text.length}
        </h4>
        <h4 className="my-3">
            Minutes Read = {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} seconds
        </h4>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1 style={{color: props.mode==='dark'?'#308D46':'black'}}>Preview</h1>
          <p className="border" 
          style={{backgroundColor: props.mode==='dark'? '#222221': 'white'}}><h4 >{text}</h4></p>
      </div>
    </>
  );
}
