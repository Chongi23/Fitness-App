import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Auth from '../../utils/auth'



=======
import Auth from '../../utils/auth';
import { 
     Segment,
     Button
    } from 'semantic-ui-react';
>>>>>>> e2c58d726db3d866b8de98e589c0cdb7a9ec8203
const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <Segment basic inverted padded='very' vertical>
                <Link to='/'>
                    <h1>Fitness Finesse</h1>
                </Link>
                <h3>It's time to finesse your fitness.</h3>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/workout'>
                                Workouts
                            </Link>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                            <Button primary>Login</Button>
                            </Link>
                            <Link to='/signup'>
                            <Button primary>signup</Button>
                            </Link>
                        </>
                    )}
                </div>
            </Segment>   
        </header>
    );
};

export default Header;