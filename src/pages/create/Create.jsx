import React from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/task-form/TaskForm";
import { createTask } from "../../utils/api";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = ({ title, body }) => {
    createTask({ body, title })
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
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Create;
