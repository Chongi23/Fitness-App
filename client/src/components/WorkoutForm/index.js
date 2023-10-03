import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Segment, Button, Card, Form } from 'semantic-ui-react';
import ExerciseForm from '../ExerciseForm/ExerciseForm.js';

const WorkoutForm = ({ userId }) => {
  // set initial form state for new workouts
  const [workoutData, setWorkoutData] = useState({
    title: '',
    description: ''
  });
 const formRef = useRef(null);
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addWorkout({
        variables: {
          title: workoutData.title,
          description: workoutData.description,
        },
      });
      //setWorkoutData(data);
window.location.reload();
      setWorkoutData({
        title: '',
        description: ''
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWorkoutData({
      ...workoutData,
      [name]: value,
    });
  };

  return (
    <Card  style={{width: "80%", padding: "1em"}}>
      <Card.Header>Lets build some workouts</Card.Header>
      {Auth.loggedIn() ? (
        <Form
          onSubmit={handleFormSubmit}
         
          //ref={formRef}
        >
          <Form.Field className="col-12 col-lg-9">
            <label>Workout:</label>
            <input
              type="text"
              name="title"
              placeholder='Add a Workout Title...'
              value={workoutData.title}
              onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
              <label>Description:</label>
            <textarea
              name="description"
              placeholder='Add a Workout Description...'
              value={workoutData.description}
              onChange={handleInputChange}
            />
          </Form.Field>
          <div>
            <Button  type="submit">
              Add Workout
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
          You need to be logged in to create workouts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </Card>
  );
};
export default WorkoutForm;