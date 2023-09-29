import React from 'react';



const WorkoutList = ({ workouts }) => {
    if (!workouts.length) {
        return <h3>No workouts found</h3>;
    }

return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout) => (
            <div key={workout} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {workout} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkoutList;