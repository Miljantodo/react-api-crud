import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./TaskList.css";
import { fetchTasks } from "../../utils/api";
import { Oval } from "react-loader-spinner";

const Listings = () => {
  const [listData, setlistData] = useState(null);

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        setlistData(tasks);
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
            {listData ? (
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
              ))
            ) : (
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
