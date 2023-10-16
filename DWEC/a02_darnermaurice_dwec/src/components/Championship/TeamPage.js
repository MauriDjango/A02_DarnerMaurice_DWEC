import React, { useState } from 'react';
import TeamsTable from './TeamsTable';
import AddTeamForm from './AddTeamForm';

/**
 * Component for managing a list of teams, displaying a table of teams,
 * and adding new teams using the 'AddTeamForm' component.
 */
const TeamsPage = () => {
    // Define state for the list of teams using React hooks.
    const [teams, setTeams] = useState([
        { name: 'Real Madrid', points: 30 },
        { name: 'Barcelona', points: 28 },
        { name: 'Sevilla', points: 25 },
    ]);

    /**
     * Function for adding a new team or updating an existing team's points.
     *
     * @param {Object} newTeam - The new team object to be added or updated.
     */
    const addTeam = (newTeam) => {
        const updatedTeams = [...teams];
        // Check if the team with the same name already exists.
        const existingTeam = updatedTeams.find((team) => team.name === newTeam.name);
        if (existingTeam) {
            // Update the points for an existing team.
            existingTeam.points = newTeam.points;
        } else {
            // Add a new team and sort the list by points in descending order.
            updatedTeams.push(newTeam);
            updatedTeams.sort((a, b) => b.points - a.points);
        }
        // Update the list of teams in the component's state.
        setTeams(updatedTeams);
    };

    return (
        <div>
            <h1>Team Table</h1>
            {/* Display the TeamsTable component with the list of teams. */}
            <TeamsTable teams={teams} />
            {/* Display the AddTeamForm component for adding new teams. */}
            <AddTeamForm addTeam={addTeam} />
        </div>
    );
};

export default TeamsPage;
