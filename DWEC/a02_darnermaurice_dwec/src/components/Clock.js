import React, { useEffect, useState } from 'react';
import '../App.css';

/**
 * Component for displaying the current time.
 */
const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

    /**
     * Format the provided date object as a 12-hour time with AM/PM.
     *
     * @param {Date} date - The date object to format.
     * @returns {string} - Formatted time string (e.g., "12:01:30 p.m.").
     */
    const timeFormat = (date) => {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const period = hour >= 12 ? 'p.m.' : 'a.m.';

        const hourFormatted = String(hour % 12).padStart(2, '0');
        const minuteFormatted = String(minute).padStart(2, '0');
        const secondFormatted = String(second).padStart(2, '0');

        return `${hourFormatted}:${minuteFormatted}:${secondFormatted} ${period}`;
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-title">Clock</h2>
            <div className="exercise-description">
                <h3>Write a script that displays the current time</h3>
            </div>
            <div className="exercise-result">
                <p>The current time is:</p>
                <p>{timeFormat(time)}</p>
            </div>
        </div>
    );
};

export default Clock;
