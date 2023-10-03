import React, { useState, useEffect } from 'react';

const StartButton = ({ startFunction, gameOver, win }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timeLeft = 3;
    setCountdown(timeLeft);
    const countdownInterval = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);

      // Countdown finished, start the game
      if (timeLeft === 0) {
        clearInterval(countdownInterval);
        startFunction(); // Call the startFunction provided as a prop
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [startFunction]);

  return (
    <>
      {countdown > 0 && <div className="countdown-text">{countdown}</div>}

      <button
       
        className={!gameOver ? 'no-show' : win !== null ? 'start-button-gameOver' : 'start-button'}
      >
        Start game!
      </button>
    </>
  );
};

export default StartButton;
