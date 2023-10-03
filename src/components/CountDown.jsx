import React, { useState, useEffect } from 'react';

const CountdownTimer = ({gameOver,win,duration}) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [start,setStart] = useState(false)






  useEffect(() => {
    
    
    let interval;
    if (!gameOver && remainingTime > 0 ) {
       
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }


    return () => {
      clearInterval(interval);
    };
  }, [gameOver,remainingTime,duration]);

  useEffect(() => {
    if (remainingTime === 0 ) {
     setTimeout(()=>{
        setRemainingTime(duration)
        setStart(false)
     },1000)
    }
  }, [remainingTime,win,duration]);

  const timerStyle={
    fontSize: '1rem',
    position: 'relative',
    zIndex: 99999990000000,
   // transform: 'translateY(-6rem)'
   // marginTop: '10rem',
  // marginRight: '2rem',
  }


  return (
    <div>
      {remainingTime > 0 ? (
        <div
        style={timerStyle}>{`Time Remaining: ${remainingTime} seconds`}</div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
