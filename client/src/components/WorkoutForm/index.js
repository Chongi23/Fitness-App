import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import Auth from '../../utils/auth';

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
    <div>
      <h4>Create More Workouts</h4>

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
            <button  type="submit">
              Set Workout
            </button>
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
    </div>
  );
};

export default WorkoutForm;
