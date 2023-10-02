import React from 'react';

const WorkoutCard = ({ workout }) => {
    return (
        <div>
            <div>
                <h4>{workout.title}</h4>
                <p>{workout.description}</p>
            </div>
            <div>
                {/* Render exercises, sets, weights, reps, notes */}
            </div>
        </div>
    );
};

export default WorkoutCard;