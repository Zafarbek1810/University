import React from 'react';
import HomePageWrapper from './style';
import Header from '../Header';
import Form from './Form';
import EducationType from './EducationType';
import Program from './Program';
import About from './About';
import Partners from './Partners';
import Belt from './Belt';
import News from './News';
import Footer from '../Footer';
import NewBanner from './NewBanner';
import Banner from './Banner';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Header/>
            <div className="main">
            {/* <NewBanner/> */}
            <Banner/>
            <Form/>
            <EducationType/>
            {/* <Program/> */}
            <Form/>
            <About/>
            <Partners/>
            <Belt/>
            <News/>
            <Form/>
            </div>
            <Footer/>
        </HomePageWrapper>
    );
};

export default HomePage;