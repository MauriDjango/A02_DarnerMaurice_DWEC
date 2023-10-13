// CircumferenceCalculator.js
import React, { useState } from 'react';
import '../App.css';

const nameRegex = /([a-zA-z]+)\s+([a-zA-z]+)\s+([a-zA-z]+)/g

//TODO for some reason match in change event shows up as null every other letter or change introduced
const NameInfo = () => {
    const [input, setInput] = useState('')
    const [firstName, setFirstName] = useState('');
    const [firstLast, setFirstLast] = useState('');
    const [secondLast, setSecondLast] = useState('');
    const [fullName, setFullName] = useState('');
    const [nameLength, setNameLength] = useState(null);
    const [userName, setUserName] = useState(null);
    const [altUserName, setAltUserName] = useState(null);
    const [match, setMatch] = useState(null)

    const getNameLength = () => {
        return input.replaceAll(' ', '').toString().length;
    }

    const getUserName = () => {
        console.log(match)
        return (match[1][0]+ match[2] + match[3][0]).toLowerCase()
    };

    //TODO: Check that this function correctly capitalizes
    function getAltUserName() {
        let altUserName = (match[1].slice(0, 3) + match[2].slice(0, 3) + match[3].slice(0, 3)).toLowerCase();
        altUserName = altUserName.charAt(0).toUpperCase() + altUserName.slice(1);

        return altUserName;
    }

    const showInfo = () => {
        console.log("Show info activated")
        if (match !== null)  {
            console.log(match)
            setFirstName(match[1])
            setFirstLast(match[2])
            setSecondLast(match[3])
            setFullName(firstName + ' ' + firstLast + ' ' + secondLast)
            setNameLength(getNameLength)
            setUserName(getUserName)
            setAltUserName(getAltUserName)
        } else {
            alert('Please enter a valid name.')
        }
    }

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Name Info</h2>
            <div className="exercise-description">
                <h3>Write a script that asks the user for their name and displays information on the screen (not in the console): </h3>
                <p>The length of the name plus the surnames (excluding spaces).</p>
                <p>The string in lowercase and uppercase.</p>
                <p>To split the name and surnames and display them on 3 lines, where it says: </p>
                <p>Name</p>
                <p>Last Name 1</p>
                <p>Last Name 2</p>
                <p>A username proposal, composed of the initial of the name, the first surname, and the initial of the second surname. For example, for Laura Folgado Galache, it would be lfolgadog.</p>
                <p>Another username proposal, composed of the first three letters of the name (with the first in uppercase) and the two surnames. For example, for the previous name, it would be Laufolgal.</p>
            </div>
            <div className="exercise-input">
                <label>Enter your full name: </label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value); // Update the state with the current input value
                        console.log(input);
                        setMatch(nameRegex.exec(e.target.value)); // Update the match state with the result
                        console.log(match);
                    }}
                />
                <button onClick={showInfo} className="button">Show Info</button>
                </div>
                {firstName !== '' && (
                <div className="exercise-result">
                    <p>The length of the name plus the surnames (excluding spaces): {nameLength}</p>
                    <p>The string in lowercase: {fullName.toLowerCase()} and uppercase: {fullName.toUpperCase()}</p>
                    <p>To split the name and surnames and display them on 3 lines, where it says: </p>
                    <p>First Name: {firstName}</p>
                    <p>First Last Name: {firstLast}</p>
                    <p>Second Last Name: {secondLast}</p>
                    <p>First possible username: {userName}</p>
                    <p>Second possible username: {altUserName}</p>
                </div>
                )}
        </div>
    )
}

export default NameInfo;
