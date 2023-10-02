import React from 'react';
import { Card, Button} from 



const WorkoutList = ({ workouts }) => {
    if (!workouts) {
        return <h3>No workouts found</h3>;
    }

return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout) => (
            <Card key={workout} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {workout} <br />
                </h4>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default WorkoutList;