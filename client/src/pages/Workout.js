import React from 'react';
import  WorkoutForm  from '../components/WorkoutForm';
//import WorkoutList from '../components/WorkoutList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';

const Workout = () => {
   const { userId } = useParams();
   const {loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
   });
   console.log('data', loading);

   const user = data?.user || {};
   
   if (loading) {
    return <div>Loading...</div>;
   }

   return (
    <div>
        <h2>
         {user.name} you have these workouts </h2>
         <div><WorkoutForm userId={user._id} />
         </div>
    </div>
   );
   
};

export default Workout;