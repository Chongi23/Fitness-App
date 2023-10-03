import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';

const WorkoutView = ({ workout, startstate, handleStateChange }) => {
    const { id } = useParams();
    const [currentWorkout, setCurrentWorkout] = useState({});
    const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT);
    console.log(data);

    return (
        <Segment>
            <h4>Hello workout</h4>
            <h4></h4>
            
        </Segment>
    )
};

export default WorkoutView;