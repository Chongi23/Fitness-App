import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <div>
                <Link to='/'>
                    <h1>Fitness Finesse</h1>
                </Link>
                <p>It's time to finesse your fitness.</p>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/workout'>
                                Workout
                            </Link>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                Login
                            </Link>
                            <Link to='/signup'>
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;