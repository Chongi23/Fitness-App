import React from 'react';
import  WorkoutForm  from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { Segment } from 'semantic-ui-react';
import Auth from '../utils/auth';

const Workout = () => {
   //const { userId } = useParams();
   const userId = Auth.getUser().data._id
   const {loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
   });
   console.log('data', loading);

   const user = data?.user || {};
   console.log("User", user)
   
   if (loading) {
    return <div>Loading...</div>;
   }

   return (
      <Segment>
    <div>
        <h2>
         {user.userName} you have these workouts </h2>
         <div><WorkoutForm userId={user._id} />
         <div><WorkoutList userId={user._id} /></div>
         </div>
    </div>
    </Segment>
   );
};


export default Workout;