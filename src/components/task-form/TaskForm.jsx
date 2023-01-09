import React, { useState } from "react";

function TaskForm({ initialTitle, initialBody, onSubmit, onRemove }) {
  const [title, setTitle] = useState(initialTitle || "");
  const [body, setBody] = useState(initialBody || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    onRemove();
  };

  return (
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
          {onRemove && (
            <button className="btn btn-danger" onClick={handleRemove}>
              DELETE
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
