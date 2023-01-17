import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="App-header">
          <h1>Surreal Estate</h1>
        </header>
      </div>
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/" element={AddProperty} />
      </Routes>
    </>
  );
};

export default App;
