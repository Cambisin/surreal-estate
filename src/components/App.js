import React from "react";
import "../styles/app.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h2>Surreal Estate</h2>
        </header>
      </div>
    </>
  );
};

export default App;
