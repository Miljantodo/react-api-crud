import React from "react";
import { Link } from "react-router-dom";
import TaskList from "../../components/task-list/TaskList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="lanpage">
        <h1>TASKS</h1>
        <div>
          <Link to="/task/create" className="btn btn-success">
            NEW
          </Link>
        </div>
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
