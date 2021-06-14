
import './App.css'
import Card from './components/Card/index'
import { React, useState, useEffect } from 'react'

const App = () => {

  const [ days, setDays ] = useState([]);
  const [ passed, setPassed ] = useState(0);
  useEffect(() => {
    var birthDay = new Date("06/14/2001");
    var currentDay = new Date();
    var lastDay = new Date("05/06/2070"); // around 
     
    var passedTime = currentDay.getTime() - birthDay.getTime();
    passedTime = passedTime / (1000 * 3600 * 24 * 7);
    passedTime = Math.floor(passedTime);
    setPassed(passedTime);
    var diffInTime = lastDay.getTime() - birthDay.getTime();
    var diffInDays = diffInTime / (1000 * 3600 * 24 * 7);
    console.log(diffInDays);
    setDays([...Array(Math.floor(diffInDays)).keys()]);
  },[])
  return (
    <div>
    <div className="head"></div>
    <div className="calender-wrapper">
      <div className="card-wrapper">
        {days.map((data, index) =>  ( data < passed ) ? <Card number={data} passed={true} /> : <Card number={data} passed={false} /> )}
      </div>
    </div>
  </div>
  );
}

export default App;
