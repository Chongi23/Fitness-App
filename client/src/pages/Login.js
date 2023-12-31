import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { 
    Segment 
   } from 'semantic-ui-react';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.login.token);
            console.log('Logged in with token:', data.login.token);

        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <Segment>
                <h4>Login</h4>
                <div>
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to='/'>back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='form-input'
                                placeholder='Your email'
                                name='email'
                                type='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='password'
                                name='password'
                                type='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                            >
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
            </Segment>
        </main>
    );
};

export default Login;