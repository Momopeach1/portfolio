import React from 'react';
import { MenuItem } from "react-pro-sidebar";
import { FiGithub } from "react-icons/fi";
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
                    <div className='project-card-text-container'>
                        <h2 className='project-title-flare'>Project being improved</h2>
                        <h1 className='project-title'>Walkie Talkie</h1>
                        <p className='project-card-desc'>
                            An instant messaging/VoIP platform that allows users to connect over the internet.
                            It has a built in collaborative whiteboard that allows users to draw together.
                        </p>
                        <ul className='project-tech-list'>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>WebRTC</li>
                            <li>Socket.io</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;