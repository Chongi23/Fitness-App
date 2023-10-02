import React, { useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutDetails from '../components/WorkoutDetails';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { Segment } from 'semantic-ui-react';
import Auth from '../utils/auth';
// import { useState } from 'react';


const Workout = () => {
   //const { userId } = useParams();
   const userId = Auth.getUser().data._id
   const { loading, data } = useQuery(QUERY_SINGLE_USER)
   const [startState, setStartState]=useState(false)
   console.log('data', loading);

   const user = data?.user || {};
   console.log("User", user);
   const workouts = user.workouts || [];

   const handleStateChange = (startState) => setStartState(startState)

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <Segment>
            <h2>
               {user.userName} you have these workouts </h2>
               {!startState?<WorkoutForm startState={startState}/>: <WorkoutDetails handleStateChange={handleStateChange}/>}
            {/* <WorkoutForm userId={user._id} /> */}
               <Segment>
                  <h3>Your Created Workouts</h3>
                  {user.workouts.length > 0 ?
                     user.workouts.map((workout) =>
                        <WorkoutCard handleStateChange={handleStateChange} workout={workout} key={workout._id} />

                     )
                     : "You have no workouts yet!"}
               </Segment>
      </Segment>
   );
};


export default Workout;