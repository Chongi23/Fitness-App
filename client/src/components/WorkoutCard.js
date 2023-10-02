import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const WorkoutCard = ({ workout, startState, handleStateChange }) => {
    return (
        <Card>
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            <div>
                {/* Render exercises, sets, weights, reps, notes */}
            </div>
            <Button style={{width:"fit-content"}} startState={startState} onClick={() => handleStateChange(true)}>Start</Button>
            <Button style={{width:"fit-content"}}>Delete</Button>
        </Card>
    );
};

export default WorkoutCard;