import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Segment, Button } from 'semantic-ui-react';


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <Segment basic inverted padded='very' vertical textAlign='center'>
                <Link to='/'>
                    <h1>Fitness Finesse</h1>
                </Link>
                <h3>It's time to finesse your fitness.</h3>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/workout'>
                            <Button primary>Workout</Button>
                            </Link><a href="/" onClick={() => Auth.logout()}>
                            <Button primary>Logout</Button></a>
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