import React, { useState, useEffect } from 'react';
import { card_names, cardData } from './cardData';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';

const NavBar = ({gameOver}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false)


  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % card_names.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + card_names.length) % card_names.length);
  };

  const toggleProjects = () => {
   gameOver ? setShowProjects((prevState) => !prevState) : null
  };

  // Array containing your rules explanation
  const rules = [
    'In this card game, there are 8 cards, each card'+
    " has an alternative picture on the back of it, which can "+
    "be accessed by simply clicking on the desired card and can be "+
    "flipped back by reclicking it. Memorize what is on the back of each card as it will be important for the game!",


    'When you click on the start button, the alternative image '+
    "that you must find will be displayed above the rows of cards. "+
    "Your task is to find the card that has that image on the back",


    "The quicker you correctly match the cards, the more points you get"+
    " Selecting an incorrect card will result in losing 100 points, be careful!",


    'You have 1 minute to get as many matches as possible and the order of '+
    "the cards is randomized every turn. Good luck!",

    "If you want to view the cards in more detail, click on the view card tab up top!",

    // "Once you complete a round, you will have to refresh the webstie "+
    // "to see your score on the leaderboard, apologies for this minor inconvinience!"
    // Add more rules as needed
  ];

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  // Function to handle clicking "Show Rules" button and toggle the rules pop-up
  const toggleRules = () => {
  gameOver ?  setShowRules((prevState) => !prevState) : null
  };

  // Function to handle clicking on "Next Rule" button
  const handleNextRule = () => {
    setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % rules.length);
  };

  // Function to handle clicking on "Previous Rule" button
  const handlePrevRule = () => {
    setCurrentRuleIndex((prevIndex) => (prevIndex - 1 + rules.length) % rules.length);
  };

  const toggleAbout = () => {
  gameOver ?  setShowAbout(!showAbout) : null
  };

  const handleBackToHome = () => {
    // Close the About pop-up when the "Back to Home" button is clicked
    setShowAbout(false);

    setFadeOutAnimation(true);

    setTimeout(() => {
      setShowAbout(false);
      // Reset the fadeOutAnimation state so that it can be triggered again if needed
      setFadeOutAnimation(false);
    }, 500); // Match the duration of the CSS transition (in milliseconds)
  

    
  };

  // Attach the event listener to the scroll event when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutContentStyle = {
    backgroundImage: 'radial-gradient(circle, #a3a3a3, #37643d, #800080, #0e860e)',
    backgroundSize: '200% 200%',
    animation: 'quantum-animation 5s linear infinite',
    width: '100%',
    height: '50vh',
    maxHeight: '400px',
    paddingTop: '20px',
    zIndex: '2099200',
    position: 'relative'
   
  };


  const aboutButtonStyle = {
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    animation: fadeOutAnimation ? 'fadeOut 1s ease' : null,
  };

  const cardStyle = {
    
    marginTop: '3rem',
  transform: 'translateY(-3rem)',
       position:  'relative',
       height: '80vw',
       width: '47vw',
       maxHeight: '750px',
       maxWidth: '480px',
       Zindex: 100000,
     
       marginLeft: 'auto',
       marginRight: 'auto',
       
       
       transition: 'transform 0.5s ease',
       // marginBottom: '-7rem'
   }
   const textBoxStyle = {
    transform: 'translateY(0rem)',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '8px',
    background: 'linear-gradient(45deg, orange, red)',
    color: 'white',
    fontSize: 'auto',
    fontWeight: 'bold',
  
    width: '80%',
    maxWidth: '700px',
    height: '15%',
    Zindex: 999,
  };


 

  return (
    <>
      {/* Your banner */}
      <div className={`banner ${isScrolled ? 'scrollable' : ''}`}>
        <ul className="navLinks">
          <li>Thomas' card game</li>
          <li><a href="#" onClick={toggleAbout}>About</a></li>
          <li><a href="#" onClick={toggleProjects}>View cards </a></li>
          <li>
            <button onClick={toggleRules}>Show Rules</button>
          </li>
        </ul>
      </div>

      {/* Rules pop-up */}
      {showRules && (
        <div className={showRules ? 'popup-show' : 'popup'}>
          <div className="popup-content">
            {/* Display the current rule */}
            <p>{rules[currentRuleIndex]}</p>
            <div className="popup-buttons">
              {/* Button to show the previous rule */}
              <button onClick={handlePrevRule} disabled={currentRuleIndex === 0}>
                Back
              </button>
              {/* Button to show the next rule */}
              <button onClick={handleNextRule} disabled={currentRuleIndex === rules.length - 1}>
                Next 
              </button>
              </div>
              {/* Button to close the rules pop-up */}
              <button onClick={toggleRules}
              style={{marginLeft:'auto',
                      marginRight:'auto',
                      transform: 'translateY(6rem)'}}>Close</button>
            
          </div>
        </div>
      )}

      {/* About pop-up */}
      {showAbout && (
  <div className="popup-show">
    <div className='about-content' >
      <p className='about-text'>
        This is a simple card game to help develop my web developing skills.<br/>
        This is my first project and any feedback is greatly appreciated.<br/>
        You can look at the cards that happen to be my own art or play the game.<br/>
        The rules of the game can been seen by click on show rules
      </p>
      <img src={gokuVsJiren}
      className="about-image"/>
      <button onClick={handleBackToHome} className="about-button">
        Back to Home
      </button>
    </div>
  </div>
    )}

    {/* Projects pop-up */}
    {showProjects && (
        <div className="popup-show">
          <div className='about-content'
          >
            <div className="about-card-container">
            <img src={card_names[currentCardIndex].imageSrc} alt={`Project ${currentCardIndex + 1}`}
            className="about-card" />
            <p className='card-text-box'
           >{cardData[currentCardIndex]}</p>
            <div className="view-card-buttons">
              <button onClick={handlePrevCard} disabled={currentCardIndex === 0}
              style={{transform:'translateX(-3rem)'}}>
                Previous
              </button>
              <button onClick={handleNextCard} disabled={currentCardIndex === card_names.length - 1}
              style={{transform:'translateX(2rem)'}}>
                Next
              </button>
            </div>
            <button onClick={toggleProjects}
            className="card-close-button">
              Close
            </button>
            </div>
          </div>
        </div>
      )}


      <header>{/* Your header content */}</header>
    </>
  );
};

export default NavBar;
