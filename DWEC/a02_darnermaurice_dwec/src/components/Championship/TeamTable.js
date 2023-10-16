import React from 'react';

/**
 * Component for rendering a table of teams and their points.
 *
 * @param {Object[]} teams - An array of team objects, each containing a 'name' and 'points' property.
 * @param {function} [updatePoints] - A function to update points (optional).
 */
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
