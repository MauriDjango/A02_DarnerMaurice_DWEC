import React, { useState } from 'react';
import '../App.css';

// Regular expression to validate date format (yyyy-mm-dd)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const WeekCalculator = () => {
    // State to manage user input
    const [date, setDate] = useState('');
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState('');

    // Function to find the week of the year based on the input date
    const findWeek = () => {
        // Calculate the first Thursday of the provided year and month
        const firstThursday = new Date(year, month - 1, 1 + (4 - day + 7) % 7);

        // Calculate the difference in days between the input date and the first Thursday
        const daysDifference = Math.floor((date - firstThursday) / (24 * 60 * 60 * 1000));

        // Calculate and return the week number
        return Math.floor(daysDifference / 7) + 1;
    }

    // Function to handle date input and validation
    const calculate = () => {
        if (dateRegex.test(date)) {
            // Extract and set the year, month, and day from the input date
            setYear(date.getFullYear());
            setMonth(date.getMonth() + 1); // Adding 1 to month because it's zero-based (0 = January, 1 = February, ...)
            setDay(date.getDay());

            // TODO: The code should also handle the date input and validation here.
        } else {
            alert('Please enter a valid date in the yyyy-mm-dd format.');
        }
    }

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Week Calculator</h2>
            <div className="exercise-description">
                <h3>Write a script that asks the user for the date and displays which week of the year it is.</h3>
            </div>
            <div className="exercise-input">
                <label>Enter the date (yyyy-mm-dd): </label>
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} // Update the date state
                />
                <button onClick={calculate} className="button">Calculate</button>
            </div>
            {date !== '' && (
                <div className="exercise-result">
                    <p>The date provided is in week number {findWeek()} of the year.</p>
                </div>
            )}
        </div>
    )
}

export default WeekCalculator;
