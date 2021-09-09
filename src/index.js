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

const Book = () => {
  const title = "If Animals Kissed Good Night";
  const author = "Ann Whitford Paul";
  return (
    <book className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"></img>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 5}</p>
    </book>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
