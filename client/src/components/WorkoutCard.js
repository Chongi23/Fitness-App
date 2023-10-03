import React from 'react';
import { Card, Button, Segment } from 'semantic-ui-react';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout,handleStateChange }) => {
    console.log(workout)
    return (
        <Card>
            <Segment inverted color="black">
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            <div>
                <ExerciseCard />
            </div>
            <Link to={`/workoutView/${workout._id}`}>
            <Button primary style={{width:"fit-content"}} onClick={() => handleStateChange(true)}>Start</Button>
            </Link>
            <Button primary style={{width:"fit-content"}}>Delete</Button>
            </Segment>
        </Card>
    );
};

export default WorkoutCard;