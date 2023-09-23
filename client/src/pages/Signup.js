import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState ] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div>
                <h4>Finesse Your Fitness! Sign Up!</h4>
                <div>
                    {data ? (
                        <p>
                            Congratualtions! You're In!
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <input
                            className='form-input'
                            placeholder='Your username'
                            name='username'
                            type='text'
                            value={formState.username}
                            onChange={handleChange}
                            />
                            <input 
                            className='form-input'
                            placeholder='Your first name'
                            name='firstName'
                            type='text'
                            value={formState.firstName}
                            onChange={handleChange}
                            />
                            <input 
                            className='form-input'
                            placeholder='Your last name'
                            name='lastName'
                            type='text'
                            value={formState.lastName}
                            onChange={handleChange}
                            />
                            <input 
                            className='form-input'
                            placeholder='Create Password'
                            name='password'
                            type='password'
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button
                                type='submit'>
                                Submit
                            </button>
                        </form>
                    )}

                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Signup