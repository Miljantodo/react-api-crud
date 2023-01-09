import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/create" element={<Create />} />
          <Route path="/task/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
