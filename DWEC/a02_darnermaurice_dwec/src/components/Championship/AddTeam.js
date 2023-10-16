import React, { useState } from 'react';

/**
 * Component for adding a new team with a name and points.
 *
 * @param {Object} props - Component props.
 * @param {function} props.addTeam - Function to add a new team.
 */
const AddTeamForm = ({ addTeam }) => {
    // Define state variables for team name and points using React hooks.
    const [teamName, setTeamName] = useState('');
    const [teamPoints, setTeamPoints] = useState('');

    /**
     * Handle the form submission.
     *
     * @param {Object} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the 'addTeam' function with the team name and points as an object.
        addTeam({ name: teamName, points: parseInt(teamPoints) });
        // Reset the input fields after submission.
        setTeamName('');
        setTeamPoints('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input for team name */}
            <input
                type="text"
                placeholder="Team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            {/* Input for team points */}
            <input
                type="number"
                placeholder="Points"
                value={teamPoints}
                onChange={(e) => setTeamPoints(e.target.value)}
            />
            {/* Submit button */}
            <button type="submit">Enter</button>
        </form>
    );
};

export default AddTeamForm;
