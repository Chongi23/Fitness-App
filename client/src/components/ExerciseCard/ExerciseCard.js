import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const ExerciseCard = ({ exercise, startState, handleStateChange }) => {
    return (
        <Card>
            <h5>Exercise Name</h5>
            <p>Exercise Description</p>
            <div>
                {/* Render exercises, sets, weights, reps, notes */}
            </div>
        </Card>
    );
};

export default ExerciseCard;