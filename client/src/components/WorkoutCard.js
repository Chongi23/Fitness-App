import React from 'react';
import { Card, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout,handleStateChange }) => {
    console.log(workout)
    return (
        <Card>
            <Segment inverted color="black">
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            </Segment>
        </Card>
    );
};

export default WorkoutCard;