import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ExerciseCard from './ExerciseCard/ExerciseCard';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_WORKOUT } from '../utils/mutations';

const WorkoutCard = ({ workout, startState, handleStateChange }) => {
    const [removeWorkout] = useMutation(REMOVE_WORKOUT);
    
    const handleDelete = async () => {
        try {
            await removeWorkout({
                variables: { workoutId: workout._id },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card>
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            <div>
                <ExerciseCard />
            </div>
            <Button style={{width:"fit-content"}} onClick={handleDelete}>Delete</Button>
        </Card>
    );
};

export default WorkoutCard;