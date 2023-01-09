import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body };

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Saved.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="button-back">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
      <div className="form-group">
        <form className="container" onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div>
            <label>Body</label>
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="button-save">
            <button className="btn btn-success" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
