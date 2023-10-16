import React, { useState } from 'react';
import '../App.css';
import RadiusCalculator from "./RadiusCalculator";
import NameInfo from "./NameInfo";
import WeekCalculator from "./WeekCalculator";
import Clock from "./Clock";
import TeamPage from "./Championship/TeamPage";
import CookBook from "./CookBook";
import NewWindow from "./NewWindow";
import Cookies from "./Cookies";

const exerciseMetadata = [
    // An array of exercise metadata, each containing a title and description
    {
        title: 'Exercise 1',
        description: 'Write a script that asks the user for the value of the radius and displays various calculations'
    },
    {
        title: 'Exercise 2',
        description: 'Write a script that asks the user their first and last name and displays information about them'
    },
    {
        title: 'Exercise 3',
        description: 'Write a script that asks the user to input a date and displays which week of the year it is'
    },
    {
        title: 'Exercise 4',
        description: 'Write a script that displays the current time'
    },
    {
        title: 'Exercise 5',
        description: 'Write a script that houses different recipes'
    },
    {
        title: 'Exercise 6',
        description: 'Write a script that shows a table of different competing soccer teams and their points'
    },
    {
        title: 'Exercise 7',
        description: 'Write a script that opens a new window'
    },
    {
        title: 'Exercise 8',
        description: 'Write a script that displays cookies'
    }
]

function Index() {
    // State to keep track of the selected exercise
    const [selectedExercise, setSelectedExercise] = useState(null);

    // Function to handle exercise selection
    const handleExerciseSelection = (index) => {
        setSelectedExercise(index);
    }

    return (
        <div className="exercises-container">
            <ul className="exercise-list">
                {exerciseMetadata.map((exercise, index) => (
                    <button key={index} onClick={() => handleExerciseSelection(index)}>
                        {exercise.title}
                    </button>
                ))}
            </ul>

            {selectedExercise !== null && (
                <div>
                    <h2>{exerciseMetadata[selectedExercise].title}</h2>
                    <p>{exerciseMetadata[selectedExercise].description}</p>
                    {/* Conditional rendering of exercise components */}
                    {selectedExercise === 0 && <RadiusCalculator />}
                    {selectedExercise === 1 && <NameInfo />}
                    {selectedExercise === 2 && <WeekCalculator />}
                    {selectedExercise === 3 && <Clock />}
                    {selectedExercise === 4 && <CookBook />}
                    {selectedExercise === 5 && <TeamPage />}
                    {selectedExercise === 6 && <NewWindow />}
                    {selectedExercise === 7 && <Cookies />}
                </div>
            )}
        </div>
    );
}

export default Index;
