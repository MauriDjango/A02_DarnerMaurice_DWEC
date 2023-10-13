// CircumferenceCalculator.js
import React, { useState } from 'react';
import '../App.css';

const RadiusCalculator = () => {
    const [radius, setRadius] = useState('');
    const [circumference, setCircumference] = useState(null);
    const [diameter, setDiameter] = useState(null);
    const [area, setArea] = useState(null);
    const [sphereArea, setSphereArea] = useState(null);
    const [sphereVolume, setSphereVolume] = useState(null);

    const  calculate = () => {
        if (!isNaN(parseFloat(radius))) {
            setDiameter(Math.round(2 * parseFloat(radius)));
            setCircumference(Math.round(2 * Math.PI * parseFloat(radius)));
            setArea(Math.round(Math.PI * Math.pow(parseFloat(radius), 2)));
            setSphereArea(Math.round(4 * Math.PI * Math.pow(parseFloat(radius), 2)));
            setSphereVolume(Math.round(4 * Math.PI * Math.pow(parseFloat(radius), 3)));
        } else {
            alert('Please enter a valid number for the radius.');
        }
    }

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Circumference Calculator</h2>
            <div className="exercise-description">
                <h3>Write a script that asks the user for the value of the radius of a circle and displays on the screen (not in the console): </h3>
                <br></br>
                <p>The value of the radius.</p>
                <p>The value of the diameter.</p>
                <p>The value of the circumference.</p>
                <p>The value of the area of the circle.</p>
                <p>The value of the surface area of the sphere.</p>
                <p>The value of the volume of the sphere.</p>
            </div>
            <div className="exercise-input">
                <label>Enter the radius of a circumference in cm: </label>
                <input
                    type="text"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                />
                <button onClick={calculate} className="button">Calculate</button>
                {circumference !== null && (
                    <div className="exercise-result">
                        <p>The radius is: {radius} cm</p>
                        <p>The diameter is: {diameter} cm</p>
                        <p>The circumference is: {circumference} cm</p>
                        <p>The area is: {area} cm&sup2;</p>
                        <p>The surface area of the sphere is: {sphereArea} cm&sup2;</p>
                        <p>The volume of the sphere is: {sphereVolume} cm&sup3;</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RadiusCalculator;
