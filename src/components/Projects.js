import React from 'react';

import '../styles/Project.css'

const Projects = () => {
    return (
        <div className='main-content'>
            <div className='text-container-project'>
                <div className='text-heading-project'>
                    <h1 className='h1-about-flare'>
                        01. 
                    </h1>
                    <h1 className='h1-about'>
                        Some Things I've Built
                    </h1>
                    <div className='vline'></div>
                </div>
            </div>
            <img className='project-img' alt='borg home' src='/borg_home.png'></img>
        </div>
    )
}

export default Projects;