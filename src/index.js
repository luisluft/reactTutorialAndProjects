import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Needs to be capitalized so that react can understand this is a react component
// can only return a single element (wrap everything inside a React.Fragment)
// use camelCase for html attributes (className)
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <book className="book">
    <Image />
    <Title />
    <Author />
  </book>
);

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"></img>
);

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Ann Whitford Paul
  </h4>
);

const Title = () => <h1>If Animals Kissed Good Night</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
