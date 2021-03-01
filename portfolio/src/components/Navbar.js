import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../routes';

export default function Navbar() {
    return (
        <header className='nav-bar'>
            <div className='logo-container'>
                <a href={ROUTES.LANDING} data-nav='home'>
                    {/* <img src={littleNinja} alt='ninja avatar' /> */}
                    the ninja
                    </a>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <Link href={ROUTES.SPLASH} >HOME</Link>
                    </li>
                    <li>
                        <Link href={ROUTES.PROJECTS} >PROJECTS</Link>
                    </li>
                    <li>
                        <Link href={ROUTES.CONTACT} >CONTACT</Link>
                    </li>
                    <li>
                        <Link href={ROUTES.RESUME} >RESUME</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
