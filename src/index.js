import React from "react";
import ReactDom from "react-dom";

// Needs to be capitalized so that react can understand this is a react component
function Greeting() {
  return <h4>this is Luis, and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
