import React, {useEffect, useState} from 'react';
import '../App.css';

const Clock = () => {
    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update the time every second

        return () => {
            clearInterval(timer);
        }
    }, []);

    const timeFormat = (date) => {
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        const period = hour >= 12 ? 'p.m.' : 'a.m.'

        const hourFormatted = String(hour % 12).padStart(2, '0')
        const minuteFormatted = String(minute).padStart(2, '0')
        const secondFormatted = String(second).padStart(2, '0')

        return `${hourFormatted}:${minuteFormatted}:${secondFormatted} ${period}`
    }

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Clock</h2>
            <div className="exercise-description">
                <h3>Write a script that displays the current time</h3>
            </div>
            <div className="exercise-result">
                <p>The current time is:</p>
                <p>{timeFormat(Time)}</p>
            </div>
        </div>
    )
}

export default Clock;
