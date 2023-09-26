import React from 'react';
<<<<<<< HEAD
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
   
=======
import { 
    Segment 
   } from 'semantic-ui-react';
const Workout = () => {
    return (
        <main>
            <Segment>
                <h1>Build Workout Under Construction</h1>
            </Segment>
        </main>
    );
>>>>>>> e2c58d726db3d866b8de98e589c0cdb7a9ec8203
};

export default Workout;