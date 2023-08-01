import React from 'react';
import Header from '../Header';  
import { AbiturientWrapper } from './style';
import AbiturientBanner from './Banner';
import Form from "../HomePage/Form"
import AdmissionInfo from './AdmissionInfo';
import HowToProced from './HowToProced';
import Dormitory from './Dormitory';

const Abiturient = () => {
    return (
        <AbiturientWrapper>
            <Header/>
            <div className="main">
            <AbiturientBanner/>
            <Form/>
            <AdmissionInfo/>
            <HowToProced/>
            <Dormitory/>
            </div>
        </AbiturientWrapper>
    );
};

export default Abiturient;