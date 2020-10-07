import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  );
};

export default App;
