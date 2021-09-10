import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    id: 2,
    imageUrl:
      "	https://images-na.ssl-images-amazon.com/images/I/91Y0MgtvzZL._AC_UL200_SR200,200_.jpg",
    title: "The Hawthorne Legacy (The Inheritance Games, 2)",
    author: "Jennifer Lynn Barnes",
  },
  {
    id: 3,
    imageUrl:
      "	https://images-na.ssl-images-amazon.com/images/I/81icCFFuGUS._AC_UL200_SR200,200_.jpg",
    title:
      "Countdown bin Laden: The Untold Story of the 247-Day Hunt to Bring the Mastermind of 9/11 to Justice (Chris Wallace’s…",
    author: "Chris Wallace",
  },
];

// Needs to be capitalized so that react can understand this is a react component
// can only return a single element (wrap everything inside a React.Fragment)
// use camelCase for html attributes (className)
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { imageUrl, title, author } = book;

        return <Book key={book.id} book={book}></Book>;
      })}{" "}
    </section>
  );
}

const Book = (props) => {
  const { imageUrl, author, title } = props.book;
  return (
    <article className="book">
      <img alt="my face" src={imageUrl}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
