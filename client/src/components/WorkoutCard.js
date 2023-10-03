import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout, startstate, handleStateChange }) => {
    return (
        <Card>
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            <div>
                <ExerciseCard />
            </div>
            <Link to={`/workoutView/${workout._id}`}>
            <Button style={{width:"fit-content"}} startstate={startstate} onClick={() => handleStateChange(true)}>Start</Button>
            </Link>
            <Button style={{width:"fit-content"}}>Delete</Button>
        </Card>
    );
};

export default WorkoutCard;