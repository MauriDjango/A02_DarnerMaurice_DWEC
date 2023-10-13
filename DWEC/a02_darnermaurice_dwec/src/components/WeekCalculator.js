import React, {useState} from 'react';
import '../App.css';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const WeekCalculator = () => {
    const [date, setDate] = useState("")
    const [year,setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [day, setDay] = useState("")

    const findWeek = () => {
        let firstThursday = new Date(year, month - 1, 1 + (4 - day + 7) % 7);
        let daysDifference = Math.floor((date - firstThursday) / (24 * 60 * 60 * 1000));
        return Math.floor(daysDifference / 7) + 1
    }

    const calculate = () => {
        if (dateRegex.test(date)) {
            setYear(date.getFullYear)
            setMonth(date.getMonth + 1)
            setDay(date.getDay)
        } else {
            alert('Please enter a valid date.')
        }
    }

    //TODO fix answer display
    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Week Calculator</h2>
            <div className="exercise-description">
                <h3>Write a script that asks the user for the date and displays which week of the year it is</h3>
            </div>
            <div className="exercise-input">
                <label>Enter the date - yyyy-mm-dd: </label>
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={calculate} className="button">Calculate</button>
            </div>
            {date !== '' && (
            <div className="exercise-result">
                <p>The date provided is week number {findWeek()} of the year</p>
            </div>
            )}
        </div>
    )
}

export default WeekCalculator;