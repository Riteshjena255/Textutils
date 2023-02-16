import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upperCase", 'success');
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", 'success');
  };
  const handleSentenceCaseClick = () => {
    let newText = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
    setText(newText);
    props.showAlert("Convert to sentence case", 'success');
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clear the Extra Space ", 'success');
  };

  const handleResetoClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear All Value ", 'success');
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);

  };
  const [text, setText] = useState(""); // State
  // text="new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className='my-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#32316a" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleSentenceCaseClick}
        >
          Sentence Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleResetoClick}>
          Reset
        </button>
      </div>
      <div
        className="container  my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>your text summery</h1>
        <p>
          {text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
