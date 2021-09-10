import React from "react";

const Book = ({ imageUrl, author, title }) => {
  const clickHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}>
      <img alt="my face" src={imageUrl}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => clickHandler(author)}>
        click me
      </button>
    </article>
  );
};

export default Book;
