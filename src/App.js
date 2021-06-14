
import './App.css'
import Card from './components/Card/index'
import { React, useState, useEffect } from 'react'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimationProgessProvider';


const App = () => {

  const [ days, setDays ] = useState([]);
  const [ passed, setPassed ] = useState(0);
  const [ passedPercentage, setPasspercentage ] = useState(0);

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
    let percentage = passedTime / diffInDays;
    percentage = percentage * 100;
    percentage = Math.floor(percentage);
    setPasspercentage(percentage);
    setDays([...Array(Math.floor(diffInDays)).keys()]);
  },[])
  return (
    <div>
    <div className="head">
    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={passedPercentage}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none",
              trailColor: 'rgba(140, 7, 142, 0.5)',
              backgroundColor: 'rgba(140, 7, 142, 0.5)',
            })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
    <div className="calender-wrapper">
      <div className="card-wrapper">
        {days.map((data, index) =>  ( data < passed ) ? <Card number={data} passed={true} /> : <Card number={data} passed={false} /> )}
      </div>
    </div>
  </div>
  );
}

export default App;
