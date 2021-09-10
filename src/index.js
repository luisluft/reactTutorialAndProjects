import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul",
};
const secondBook = {
  imageUrl:
    "	https://images-na.ssl-images-amazon.com/images/I/91Y0MgtvzZL._AC_UL200_SR200,200_.jpg",
  title: "The Hawthorne Legacy (The Inheritance Games, 2)",
  author: "Jennifer Lynn Barnes",
};

// Needs to be capitalized so that react can understand this is a react component
// can only return a single element (wrap everything inside a React.Fragment)
// use camelCase for html attributes (className)
function BookList() {
  return (
    <section className="booklist">
      <Book
        imageUrl={firstBook.imageUrl}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        imageUrl={secondBook.imageUrl}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log("props :", props);
  return (
    <book className="book">
      <img alt="my face" src={props.imageUrl}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </book>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
