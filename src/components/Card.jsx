import React, { useState, useEffect, useRef } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import War_Obito from '../images/war_obito.jpg';
import Vegeta from '../images/vegeta-battle.png'



const Card = ({ imageSrc,
   onClick, 
   isBig,
    selectedImage,
   text,
   altSrc,
   shiftClick,
   altShown,
   alternate,
  isDissolving,
  additonalStyle,
  gameOver,
  correct,
  incorrect
 
 }) => {
  const[isClicked,setIsClicked] = useState(false)
  const[isHovered, setIsHovered] = useState(false)
  
  



  const handleMouseEnter = () => {
    console.log("mouse entered")
    setIsHovered(true)
   
  }

  const handleMouseleave = () => {
    setIsHovered(false)
  }

  const handleClick = (event) =>{
  setIsClicked(!isClicked)

     event.shiftKey && gameOver || ( selectedImage !== null &&
      selectedImage === imageSrc)? shiftClick() : onClick() 
    }

    

  const cardStyle = {
    position:  'relative',
    // height: '30vw',
    // width: '19vw',
    // maxHeight: '250px',
    // maxWidth: '160px',

   

   
  
     transition: 'transform 0.3s ease, opacity 0.2s ease, top 0.3s ease, left 0.3s ease, right 0.3s ease',
   
    transform: isHovered ? 'scale(1.3)' : 'scale(1)',

     opacity: isDissolving &&altShown? 0 : 1,
     boxShadow:correct && altShown ? '0 0 30px 30px green':
      incorrect && altShown ? '0 0 30px 30px red' :  isHovered  && !selectedImage? '0 0 50px 25px gold': 'none', 
  
     border: '2px solid black',
     animation: gameOver && !isBig &&isHovered  && selectedImage === null
     ? 'shake 2s infinite':   incorrect ? 'shakeAndScale 0.5s 1' :
     correct && altShown && !gameOver? 'moveAndScale 1s 1' :
     'none' ,
   zIndex:( (isHovered && selectedImage === null )  ) && (correct === null && incorrect === null)? 900 : (correct != null || incorrect !== null) && !altShown ? -1 : 0
   
   
    }


    const mergedStyle = { ...cardStyle, ...additonalStyle}

  
  

//window.innerWidth, window.innerHeight for things based off screenSize

  

  return (

   

    <div className='card-container'
    >
        <img src={!altShown?imageSrc:altSrc}
        onClick={() => {
            handleClick(event);
             }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseleave}
        style={mergedStyle}
        
        className="slat"
        
       

        />
       


           
        
    </div>
  )
  }

  export default Card
   
