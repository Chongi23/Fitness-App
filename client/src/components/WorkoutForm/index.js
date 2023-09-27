import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Segment, Button } from 'semantic-ui-react';
const WorkoutForm = ({ userId }) => {
  const [workout, setWorkout] = useState('');

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addWorkout({
        variables: { userId, workout },
      });

      setWorkout('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Segment>
      <h4>Lets build some workouts</h4>

      {Auth.loggedIn() ? (
        <form
          
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add a Workout..."
              value={workout}
             
              onChange={(event) => setWorkout(event.target.value)}
            />
          </div>

          <div>
            <Button  type="submit">
              Save Workout
            </Button>
          </div>
          {error && (
            <div>
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to create workouts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </Segment>
  );
};

export default WorkoutForm;
