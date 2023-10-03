import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';
import Workout from './Workout';
import ExerciseForm from '../components/ExerciseForm/ExerciseForm';


function WorkoutView() {
    const { ExerciseForm } = useParams();
    console.log(ExerciseForm)
    const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, {
      variables: { workoutId: Workout },
    });
    const workout = data?.workout || {}
    console.log(Workout)
     if (loading) {
     return <p>Loading...</p>;
     }

    // const [exerciseInput, setExerciseInput] = useState('');
    // const [setsInput, setSetsInput] = useState('');
    // const [weightInput, setWeightInput] = useState('');
    // const [repsInput, setRepsInput] = useState('');
  
    // const handleAddExercise = () => {
    //   // Create a new exercise object and add it to the workout
    //   const newExercise = {
    //     name: exerciseInput,
    //     sets: [],
    //   };
    //   workout.exercises.push(newExercise);
  
    //   setExerciseInput('');
    // };
  
    // const handleAddSet = (exerciseIndex) => {
    //   const newSet = {
    //     weight: weightInput,
    //     reps: repsInput,
    //   };
    //   workout.exercises[exerciseIndex].sets.push(newSet);
  
    //   setWeightInput('');
    //   setRepsInput('');
    // };
  
    // return (
    //   <Segment>
    //     <h4>{workout.title}</h4>
    //     <div>
    //       <h5>Add Exercise:</h5>
    //       <input
    //         type="text"
    //         placeholder="Exercise Name"
    //         value={exerciseInput}
    //         onChange={(e) => setExerciseInput(e.target.value)}
    //       />
    //       <button onClick={handleAddExercise}>Add Exercise</button>
    //     </div>
  
    //     {workout.exercises.map((exercise, exerciseIndex) => (
    //       <div key={exerciseIndex}>
    //         <h5>Exercise: {exercise.name}</h5>
    //         <div>
    //           <h6>Add Set:</h6>
    //           <input
    //             type="text"
    //             placeholder="Weight"
    //             value={weightInput}
    //             onChange={(e) => setWeightInput(e.target.value)}
    //           />
    //           <input
    //             type="text"
    //             placeholder="Reps"
    //             value={repsInput}
    //             onChange={(e) => setRepsInput(e.target.value)}
    //           />
    //           <button onClick={() => handleAddSet(exerciseIndex)}>Add Set</button>
    //         </div>
    //         {/* Render existing sets here */}
    //       </div>
    //     ))}
    //   </Segment>
    // );
  }
  

    



    

export default WorkoutView;