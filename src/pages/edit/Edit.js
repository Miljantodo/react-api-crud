import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const[listdata,setlistData]=useState({});

  useEffect(() => {
    fetch("http://localhost:8000/posts/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTitle(resp.title);
        setBody(resp.body);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, title, body };

    fetch("http://localhost:8000/posts/" + id, {
      method: "PUT",
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

  const removeTask = () => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Deleted.");
        navigate("/");
        window.location.reload();
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
            <button
              className="btn btn-danger"
              onClick={() => {
                removeTask();
              }}
            >
              DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
