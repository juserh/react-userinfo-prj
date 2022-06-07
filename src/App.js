import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from "./components/UI/Card";
import Users from "./components/Users/Users";

const DUMMY = [];

function App() {
  const [datas, setDatas] = useState(DUMMY);

  const updateDataHandler = (data) => {
    setDatas((prev) => {
      return [data, ...prev];
    });
  };
  return (
    <div className="App">
      <Users onUpdate={updateDataHandler} data={datas} />
    </div>
  );
}

export default App;
