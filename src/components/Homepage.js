import React from 'react';

import '../styles/Homepage.css';

const Homepage = () => {
    return (
        <div className='main-content'>
            <div className='img-container'>
                <img alt='picasso japan' className='top-img' src='/IMG_3027.jpg' />
            </div>
            <div className='text-container'>
                <h2>Hey, this is</h2>
                <h1>Mohammed Elsayed.</h1>
                <h3>I create websites.</h3>
                <p>
                    I am a New York based software engineer 
                    that specializes in building and desgining 
                    websites and web applications. Currently, I manage
                    a WordPress created web page for 
                    <a className='nav-link' href ='https://arcathens.org/'> ARCAthens</a>, 
                    a website dedicated to sharing art between 
                    Athens, Greece and Bronx, New York.
                </p>
            </div> 
        </div>
    )
}

export default Homepage;