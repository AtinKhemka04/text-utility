import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, settext] = useState("");
  // const [mode, setMode] = useState("Enable Dark Mode");
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Text Cleared", "success");
  };
  const handleExtraspacesClick = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleCopyClick = () => {
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  // const toogleModeStyle = () => {
  //   if (mystyle.color === "black") {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setMode("Enable Light Mode");
  //   } else {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setMode("Enable Dark Mode");
  //   }
  // };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {props.heading}
      </h1>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <textarea
          // style={mystyle}
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          id="mybox"
          onChange={handleOnChange}
          rows="10"
        ></textarea>
      </div>
      <button
        type="button"
        // style={mystyle}
        onClick={handleUpClick}
        className="btn btn-primary"
      >
        Convert to Uppercase
      </button>
      <button
        type="button"
        // style={mystyle}
        onClick={handleLoClick}
        className="btn btn-primary mx-2"
      >
        Convert to Lowercase
      </button>
      <button
        type="button"
        // style={mystyle}
        onClick={handleCopyClick}
        className="btn btn-primary mx-2"
      >
        Copy Text
      </button>
      <button
        type="button"
        onClick={handleClearClick}
        // style={mystyle}
        className="btn btn-primary mx-2"
      >
        Clear Text
      </button>
      <button
        type="button"
        onClick={handleExtraspacesClick}
        // style={mystyle}
        className="btn btn-primary mx-2"
      >
        Remove Extra Spaces
      </button>

      {/* <button
        type="button"
        onClick={toogleModeStyle}
        // style={mystyle}
        className="btn btn-primary mx-2"
      >
        {mode}
      </button> */}
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Summary Of Text</h2>
        <p>
          {" "}
          {
            text.split(" ").filter((text) => {
              return text.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters{" "}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter Text",
};
