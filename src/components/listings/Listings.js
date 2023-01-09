/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Listings.css";

const Listings = () => {
  const [listData, setlistData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setlistData(resp);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="kartica">
            {listData &&
              listData.map((item) => (
                <Card key={item.id} style={{ width: "18rem", margin: "15px" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                    <Link
                      to={"/task/edit/" + item.id}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
