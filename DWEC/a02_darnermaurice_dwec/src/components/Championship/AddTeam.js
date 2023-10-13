// AddTeamForm.js
import React, { useState } from 'react';

const AddTeamForm = ({ addTeam }) => {
    const [teamName, setTeamName] = useState('');
    const [teamPoints, setTeamPoints] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTeam({ name: teamName, points: parseInt(teamPoints) });
        setTeamName('');
        setTeamPoints('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Puntos"
                value={teamPoints}
                onChange={(e) => setTeamPoints(e.target.value)}
            />
            <button type="submit">Enter</button>
        </form>
    );
};

export default AddTeamForm;
