import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Segment, Button } from 'semantic-ui-react';




const WorkoutForm = ({ userId }) => {
  // set initial form state for new workouts
  const [workout, setWorkout] = useState('');

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addWorkout({
        variables: { userId, workout },
      });

    
    } catch (err) {
      console.error(err);
    }

    setWorkout('');
  };
// Attempt at making a success workout
//function Success() {
   //const [addWorkout] = useMutation(ADD_WORKOUT);
   //What are we doing wrong here
//   // Also user is not defined
//   const workout = addWorkout;
//   useEffect(() => {
//      async function saveWorkout() {
//         const exercises = workout.map((exercise) => exercise._id);
//          if(exercises.length) {
//            const { data } = await addWorkout({ variable: { exercises } });
//            console.log(data);
//            return data;
//          }
//      }
//      saveWorkout();
//   }, [addWorkout]);

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
              name="workout"
             
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
