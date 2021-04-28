import React from 'react';

import '../styles/Project.css'

const Projects = () => {
    return (
        <div className='main-content-project'>
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
            <div className='project-main-container'>
                <div className='project-card'>
                    <img className='project-img' alt='borg home' src='/borg_home.png'></img>
                    <div className='project-card-text'>
                        <p className='project-card-desc'>
                            project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;