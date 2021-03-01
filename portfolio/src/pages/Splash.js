import React from 'react';
import { Link } from 'react-router-dom';
import Stack from "../components/Stack"
import ROUTES from '../routes';

export default function Splash() {
    return (
        <div>
            <div className='landing'>
                <div className='heroText'>
                    <h1>Nick Groesch</h1>
                    <p>Full-Stack Javascript Software Developer(MERN)</p>
                    <Link to={ROUTES.CONTACT}><p>Hire Me</p></Link>
                </div>
            </div>
            <div className='languages'>
                <h2>tech I can stack ...</h2>
                {/* <Stack>
                    <h3 colSpan="6">... like a blindfolded jedi runs with scissors</h3>
                    <p>Javascript</p>
                    <p>React.js</p>
                    <p>Express.js</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                    <p>Node.js</p>
                    <p>HTML5</p>
                </Stack>

                <Stack>
                    <h3 colSpan="6">... with ease approaching mastery </h3>
                    <p>Heroku</p>
                    <p>CSS3</p>
                    <p>Jest</p>
                    <p>PostgreSQL</p>
                    <p>Python</p>
                </Stack>

                <Stack>
                    <h3 colSpan="6">... like championship jenga, but versus a seed</h3>
                    <p>AWS</p>
                    <p>C</p>
                    <p>Java</p>
                </Stack> */}
            </div>
        </div>
    );
}
