import React from 'react';
import MainPage from '../pages/MainPage';
import Progress from '../pages/Progress';
import Participate from '../pages/Participate';
import Faq from '../pages/Faq';
import '../styles/Section.css';

const Section = () => {
    return (
        <div>
            <MainPage />
            <Progress />
            <Participate />
            <Faq />
        </div>
    )
}

export default Section
