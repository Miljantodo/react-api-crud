import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../../components/task-form/TaskForm";
import { deleteTask, editTask, fetchSigleTask } from "../../utils/api";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const[listdata,setlistData]=useState({});

  useEffect(() => {
    fetchSigleTask(id)
      .then((task) => {
        setTitle(task.title);
        setBody(task.body);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, [id]);

  const handleSubmit = ({ title, body }) => {
    const data = { id, title, body };

    editTask(data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const removeTask = () => {
    deleteTask(id)
      .then((res) => {
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
      {title && body && (
        <TaskForm
          initialTitle={title}
          initialBody={body}
          onSubmit={handleSubmit}
          onRemove={removeTask}
        />
      )}
    </div>
  );
};

export default Edit;
