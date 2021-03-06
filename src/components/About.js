import React from 'react';
import { FiInstagram } from "react-icons/fi";
import '../styles/About.css';

const About = () => {
    return (
        <div className='main-content'>
            <div className='text-container-about'>
                <div className='text-heading'>
                    <h1 className='h1-about-flare'>
                        01. 
                    </h1>
                    <h1 className='h1-about'>
                        About me
                    </h1>
                    <div className='vline'></div>
                </div>
                <p className='p-about'>
                    Hello! My name is Mohammed (or Momo) and I enjoy creating things that live on the internet. 
                    My interest in web development started back in 2015 playing around with inspect element and 
                    making different websites look goofy. This taught me a lot about HTML and CSS!               
                </p>
                <p className='p-about'>
                    Fast-forward to the present day, I'm now building instead of playing around in inspect element.
                    I've created web applications mainly centered on communication and being able to connect with others.
                    I'm working at <a className='nav-link' target="_blank" href ='https://arcathens.org/'> ARCAthens</a>, a non-profit
                    influenced by my same goal, connecting people.
                </p>
                <p className='p-about'>
                    Here are some technologies I loved working with recently:
                </p>
                <ul className='skill-list'>
                    <li>MongoDB</li>
                    <li>JavaScript (ES6)</li>
                    <li>Node.js</li>
                    <li>Expressjs</li>
                    <li>React</li>
                    <li>Socket.io</li>
                    <li>WebRTC</li>
                    <li>Material UI</li>
                    <li>WordPress</li>
                </ul>
            </div>
            <div className='img-container-about'>
                <img alt='date-kcorndog' class='blur' className='img-about' src='/IMG_6699.jpg' />
                <a href='https://www.instagram.com/peachysqueak/' target='_blank'>
                    <div className='add-icn-about'>
                        <i id='insta' class="fab fa-instagram fa-5x" aria-hidden="true"></i>
                        <p>@peachysqueak</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About;