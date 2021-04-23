import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import '../styles/Homepage.css';

//button styles
const useStyles = makeStyles({
    root: {
        background: 'transparent',
        borderRadius: 4,
        border: '1px solid',
        borderColor: '#64ffda',
        height: 'fit-content',
        width: 'fit-content',
        display: 'block',
        padding: '0.75rem 1rem',
        marginTop: '50px',
        '&:hover': {
            backgroundColor: '#64ffda24',
        },
    },
    label: {
        color:'#64ffda',
        textTransform: 'none',
        fontSize: '16px',
        fontFamily: 'whitney-book',
    },
});

const Homepage = () => {

    const classes = useStyles();

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
                <Button
                    component={Link} to={'/#'}
                    classes={{
                        root: classes.root,
                        label: classes.label,
                    }}
                    >
                    Resume</Button>
            </div> 
        </div>
    )
}

export default Homepage;