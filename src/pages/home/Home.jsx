import React from "react";
import { Link } from "react-router-dom";
import Listings from "../../components/listings/Listings";
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
        <Listings />
      </div>
    </div>
  );
};

export default Home;
