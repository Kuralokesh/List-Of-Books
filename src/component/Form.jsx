import React, { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [fullData, setFullData] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (author && title) {
      const userData = { author, title };
      setFullData([...fullData, userData]);
      setAuthor("");
      setTitle("");
    } else {
      alert("please fill the Data");
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          // name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          // name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {fullData.map((e) => (
        <ul key={uuidv4()} className="form-ul">
          <li>Title: {e.title}</li>
          <li>Author: {e.author}</li>
        </ul>
      ))}
    </>
  );
};

export default Form;
