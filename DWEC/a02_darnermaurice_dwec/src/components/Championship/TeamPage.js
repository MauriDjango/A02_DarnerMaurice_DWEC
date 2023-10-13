// TeamsPage.js
import React, { useState } from 'react';
import TeamsTable from './TeamsTable';
import AddTeamForm from './AddTeamForm';

const TeamsPage = () => {
    const [teams, setTeams] = useState([
        { name: 'Real Madrid', points: 30 },
        { name: 'Barcelona', points: 28 },
        { name: 'Sevilla', points: 25 },
    ]);

    const addTeam = (newTeam) => {
        const updatedTeams = [...teams];
        const existingTeam = updatedTeams.find((team) => team.name === newTeam.name);
        if (existingTeam) {
            existingTeam.points = newTeam.points;
        } else {
            updatedTeams.push(newTeam);
            updatedTeams.sort((a, b) => b.points - a.points);
        }
        setTeams(updatedTeams);
    };

    return (
        <div>
            <h1>Team Table</h1>
            <TeamsTable teams={teams} />
            <AddTeamForm addTeam={addTeam} />
        </div>
    );
};

export default TeamsPage;
