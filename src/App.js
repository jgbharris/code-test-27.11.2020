import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
/* eslint-disable no-unused-expressions */


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reference.intellisense.io/thickenernn/v1/referencia")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


console.log(data)
data.current ? console.log(data.current.data["pt2-scaled"]) : null;

let object = data.current ? data.current.data["pt2-scaled"] : null;

for (const property in object) {
  if(!property.startsWith('RD:647')) continue;
  console.log(`${property}: ${object[property]["times"]}`);
  console.log(object[property]["times"]);
  console.log(`${property}: ${object[property]["values"]}`);
  console.log(object[property]["values"]);

  
  
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
