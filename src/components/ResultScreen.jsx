import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'
// import Axios from 'axios'
// import styled, { keyframes } from 'styled-components';


const ResultScreen = ({ win, score, startClicked}) => {
  const [statsList, setStatsList] = useState([])
  const [showStats, setShowStats] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('Screen Width:', screenWidth);
    console.log('Screen Height:', screenHeight);
  }, [screenWidth, screenHeight]);





  const styles = {
    display: win === null ? 'none' : 'block',
    
    marginLeft: 'auto',
    marginRight: 'auto',
  
    zIndex: -5,
    
    transition: ' transform 1s ease',
  
  //  position: 'relative'

  };



  
  
  

 






  return (
    <>
<div className='results-container'>
  
      <img src={ win && score > 100 ? saiyans : win && score < 101? clown : null} style={styles} alt="Result"
      className={win && score > 100 ? 'result-img' : 'result-img-loss'} />
    
      <div className={win && score < 101? 'result-text-loss' : 'result-text'}>
        <p>{score < 0 && win? "ridiculous! you scored below zero" :win && score > 100 ? ` Your score was ${score}` : score < 101 && win ? `Get your points up playa! You only scored ${score}`  : null}</p>
        
        
      </div>
      </div>
    </>
  );
};

export default ResultScreen;
