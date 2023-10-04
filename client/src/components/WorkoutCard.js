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
            <Button primary style={{width:"fit-content"}} onClick={() => handleStateChange()}>Delete</Button>
            </Segment>
        </Card>
    );
};

export default WorkoutCard;