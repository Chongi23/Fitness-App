import React from 'react';
import { 
    Segment,
    Image
   } from 'semantic-ui-react';

const Home = () => {
    return (
        <main>
            <Segment basic inverted padded='very' vertical textAlign='center'>
                <h1>Congratulations! You're Home.</h1>
                <h2> Or are you in a gym? </h2>
                <Image src="background.png"></Image>
            </Segment>
        </main>
    );
};

export default Home;