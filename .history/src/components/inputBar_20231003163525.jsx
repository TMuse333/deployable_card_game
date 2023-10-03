import React, { useState, useEffect } from 'react';
// import Axios from 'axios';


const InputBar = ({gameOver, win,score}) => {
    const [username, setUserName] = useState('');
  

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    }

    
    
    const submitReview = () => {
        console.log(username)

        if (username.trim() === '') {
            alert("Please enter a valid username.");
            return;
        }

        Axios.post("http://localhost:5174/api/insert", {
           username: username,
           score: score
           
        })
        .then(() => {
            alert("Data inserted successfully");
        })
        .catch((error) => {
            console.error("Error inserting data:", error); 
        });
    }

    const inputStyles = {
        display: !gameOver && win === null ?
         'none' : win !== null ? 'none' :'block'
    }

    return (
        <div className="name-input"
        style={inputStyles}>
            <label htmlFor="name">Enter Your Name: </label>
            <input
                type="text"
                id="name"
                value={username}
                onChange={handleNameChange}
            />
            <p>Hello, {username || 'Stranger'}!</p>

            <button onClick={submitReview}>
                Submit!
            </button>

           

        </div>
    );
}

export default InputBar;
