// TeamsTable.js
import React from 'react';

const TeamsTable = ({ teams, updatePoints }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Team</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team, index) => (
                <tr key={index}>
                    <td>{team.name}</td>
                    <td>{team.points}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TeamsTable;
