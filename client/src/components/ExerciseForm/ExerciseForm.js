import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_EXERCISE_TO_WORKOUT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Segment, Button, Card, Form } from 'semantic-ui-react';

const ExerciseForm = ({ userId, workoutId, startState, handleStateChange }) => {
  // set initial form state for new workouts
  const [exerciseData, setExerciseData] = useState({
    name: '',
    description: ''
   // exerciseDetails: []
    
    });
  
  const [addExercise, { error }] = useMutation(ADD_EXERCISE_TO_WORKOUT);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addExercise({
        variables: {
          name: exerciseData.name,
          description: exerciseData.description,
        },
      });
      //setWorkoutData(data);
window.location.reload();
      setExerciseData({
        name: '',
        description: ''
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  };

  return (
    <Card  style={{width: "75%", padding: "1em"}}>
      <Segment>
      <Card.Header>Exercise Details</Card.Header>
      {Auth.loggedIn() ? (
        <Form
          onSubmit={handleFormSubmit}
         
          //ref={formRef}
        >
          <Form.Field className="col-12 col-lg-9">
            <label>Exercise Name:</label>
            <input
              type="text"
              name="name"
              placeholder='Add an Exercise Name...'
              value={exerciseData.name}
              onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
              <label>Description:</label>
            <textarea
              name="description"
              placeholder='Add a Workout Description...'
              value={exerciseData.description}
              onChange={handleInputChange}
            />
          </Form.Field>
          <div>
            <Button  type="submit">
              Add This Exercise
            </Button>
          </div>
          {error && (
            <div>
              {error.message}
            </div>
          )}
        </Form>
      ) : (
        <p>
          You need to be logged in to create Exercises. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      </Segment>
    </Card>
  );
};
export default ExerciseForm;