import React, { useState, useEffect } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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

  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };


  console.log(data)
  data.current ? console.log(data.current.data["pt2-scaled"]) : null;

  let object = data.current ? data.current.data["pt2-scaled"] : null;

  for (const property in object) {
    if (!property.startsWith('RD:647')) continue;
    // console.log(`${property}: ${object[property]["times"]}`);
    console.log(`${property}`, object[property]["times"]);
    // console.log(`${property}: ${object[property]["values"]}`);
    console.log(`${property}`, object[property]["values"]);
  }


  return (
    <div className="App">
      <header className="App-header">

       <div>
    </div>
      <div id="wdr-component"></div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </header>
    </div>
  );
}

export default App;
