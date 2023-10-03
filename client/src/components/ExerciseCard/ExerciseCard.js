import React from 'react';
import { Card, Segment } from 'semantic-ui-react';

const ExerciseCard = ({ exercise, startState, handleStateChange }) => {
    return (
        <Card>
            <Segment inverted color="blue">
            <h5>Exercise Name</h5>
            <p>Exercise Description</p>
            <div>
                {/* Render exercises, sets, weights, reps, notes */}
            </div>
            </Segment>
        </Card>
    );
};

export default ExerciseCard;