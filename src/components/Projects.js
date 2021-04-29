import React from 'react';
import { FiExternalLink, FiGithub } from "react-icons/fi";
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
                        <h2 className='project-title-flare'>In Progress / Improving</h2>
                        <h1 className='project-title'>Walkie Talkie</h1>
                        <p className='project-card-desc'>
                            An instant messaging/VoIP platform that allows users to connect over the internet.
                            It has a built in collaborative whiteboard that allows users to draw together.
                            There are multiple chat rooms for messaging and voice, as well as, different whiteboards.
                        </p>
                        <ul className='project-tech-list'>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>WebRTC</li>
                            <li>Socket.io</li>
                            <li>MongoDB</li>
                        </ul>
                        <div className='project-links'>
                            <a href='https://github.com/Momopeach1/WalkieTalkie' target='_blank'>
                                <div className='project-icn'>
                                    <FiGithub />
                                </div>
                            </a>
                            <a href='https://bigborg.herokuapp.com/' target='_blank'>
                                <div className='project-icn'>
                                    <FiExternalLink />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-card-text-container-left'>
                        <h2 className='project-title-flare'>Finished</h2>
                        <h1 className='project-title'>Morph! / Bugger.io</h1>
                        <p className='project-card-desc-left'>
                            A multiplayer top down shooter where you attempt to infect a main cell to gain points.
                            The main cell uses AI driven cellular automata to generate optimal explosion patterns based
                            on the frequent locations of players in the vicinity of the cell.
                        </p>
                        <ul className='project-tech-list-left'>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Socket.io</li>
                            <li>Flask</li>
                            <li>Circle.ci</li>
                            <li>Sentry</li>
                        </ul>
                        <div className='project-links-left'>
                            <a href='https://github.com/dukefromearth/Morph' target='_blank'>
                                <div className='project-icn'>
                                    <FiGithub />
                                </div>
                            </a>
                            <a href='https://www.youtube.com/watch?v=2P6zEizJXXk' target='_blank'>
                                <div className='project-icn'>
                                    <FiExternalLink />
                                </div>
                            </a>
                        </div>
                    </div>
                    <img className='project-img-left' alt='borg home' src='/morph_img.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Projects;