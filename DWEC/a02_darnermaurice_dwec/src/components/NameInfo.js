import React, { useState } from 'react';
import '../App.css';

// Regular expression to match a full name with three parts (e.g., First Last1 Last2)
const nameRegex = /([a-zA-Z]+)\s+([a-zA-Z]+)\s+([a-zA-Z]+)/g;

const NameInfo = () => {
    // State variables to manage various aspects of user input and computed data
    const [input, setInput] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstLast, setFirstLast] = useState('');
    const [secondLast, setSecondLast] = useState('');
    const [fullName, setFullName] = useState('');
    const [nameLength, setNameLength] = useState(null);
    const [userName, setUserName] = useState(null);
    const [altUserName, setAltUserName] = useState(null);
    const [match, setMatch] = useState(null);

    // Function to compute the length of the full name and surnames (excluding spaces)
    const getNameLength = () => {
        return input.replaceAll(' ', '').toString().length;
    };

    // Function to compute the first proposed username (e.g., lfolgadog)
    const getUserName = () => {
        return (match[1][0] + match[2] + match[3][0]).toLowerCase();
    };

    // Function to compute the second proposed username (e.g., Laufolgal)
    function getAltUserName() {
        let altUserName = (match[1].slice(0, 3) + match[2].slice(0, 3) + match[3].slice(0, 3)).toLowerCase();
        altUserName = altUserName.charAt(0).toUpperCase() + altUserName.slice(1);
        return altUserName;
    }

    // Function to display the computed information or show an alert if the name is invalid
    const showInfo = () => {
        if (match !== null) {
            setFirstName(match[1]);
            setFirstLast(match[2]);
            setSecondLast(match[3]);
            setFullName(firstName + ' ' + firstLast + ' ' + secondLast);
            setNameLength(getNameLength());
            setUserName(getUserName());
            setAltUserName(getAltUserName());
        } else {
            alert('Please enter a valid name.');
        }
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Name Info</h2>
            <div className="exercise-description">
                <h3>Write a script that asks the user for their name and displays information on the screen:</h3>
                <p>The length of the name plus the surnames (excluding spaces).</p>
                <p>The string in lowercase and uppercase.</p>
                <p>To split the name and surnames and display them on 3 lines.</p>
                <p>A username proposal composed of the initial of the name, the first surname, and the initial of the second surname.</p>
                <p>Another username proposal composed of the first three letters of the name (with the first in uppercase) and the two surnames.</p>
            </div>
            <div className="exercise-input">
                <label>Enter your full name: </label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value); // Update the state with the current input value
                        console.log(e.target.value)
                        console.log(input)
                        console.log(match, " 1")
                        setMatch(nameRegex.exec(e.target.value)); // Update the match state with the result of the regex
                        console.log(match, " 2")
                    }}
                />
                <button onClick={showInfo} className="button">Show Info</button>
            </div>
            {firstName !== '' && (
                <div className="exercise-result">
                    <p>The length of the name plus the surnames (excluding spaces): {nameLength}</p>
                    <p>The string in lowercase: {fullName.toLowerCase()} and uppercase: {fullName.toUpperCase()}</p>
                    <p>To split the name and surnames and display them on 3 lines:</p>
                    <p>First Name: {firstName}</p>
                    <p>First Last Name: {firstLast}</p>
                    <p>Second Last Name: {secondLast}</p>
                    <p>First possible username: {userName}</p>
                    <p>Second possible username: {altUserName}</p>
                </div>
            )}
        </div>
    );
};

export default NameInfo;
