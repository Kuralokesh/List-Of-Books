import React from "react";
import BooksList from "../books.json";
import "./GivenData.css";

const GivenData = () => {
  return (
    <div className="container">
      {BooksList.map((e) => (
        <ul key={e.title} className="ul-container">
          <li>Title: {e.title}</li> &nbsp; &nbsp; &nbsp; &nbsp;
          <li>Author: {e.author}</li>
        </ul>
      ))}
    </div>
  );
};

export default GivenData;
