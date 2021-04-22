import React from 'react';

import '../styles/Homepage.css';

const Homepage = () => {
    return (
        <div className='main-content'>
            <div className='img-container'>
                <img alt='picasso japan' className='top-img' src='/IMG_3027.jpg' />
            </div>
            <span className='flare-text'> I am</span>
            <h1>Mohammed Elsayed.</h1>
            <p>I make websites</p>
        </div>
    )
}

export default Homepage;