import React from 'react';
import  WorkoutForm  from '../components/WorkoutForm';
//import WorkoutList from '../components/WorkoutList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { Segment } from 'semantic-ui-react';

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
      <Segment>
    <div>
        <h2>
         {user.name} you have these workouts </h2>
         <div><WorkoutForm userId={user._id} />
         </div>
    </div>
    </Segment>
   );
};


export default Workout;