import React from "react";
import {Routes, Route} from "react-router";
import Home from "./routes/Home";
import Events from "./routes/Events";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
};

export default App;
