import React from 'react';
import AcademyWrapper from './style';
import Header from "../Header"
import Footer from "../Footer"
import BannerAcademy from './Banner';
import History from './History';
import Founder from './Founder';
import Partner from '../Partners/Partner';
import Form from '../../Pages/HomePage/Form';

const Academy = () => {
    return (
        <AcademyWrapper>
            <Header/>
                <div className="main">
                    <BannerAcademy/>
                    <History/>
                    <Founder/>
                    <Partner/>
                    <Form/>
                </div>
            <Footer/>
        </AcademyWrapper>
    );
};

export default Academy;