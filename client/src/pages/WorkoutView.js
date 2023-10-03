import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';

const WorkoutView = ({ workout, startstate, handleStateChange }) => {
    // const { id } = useParams();
    // const { loading, data } = useQuery(QUERY_SINGLE_USER);

    return (
        <Segment>
            <h4>Hello workout</h4>
            <h4></h4>
            
        </Segment>
    )
};

export default WorkoutView;