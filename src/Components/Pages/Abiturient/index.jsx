import React from 'react';
import Header from '../Header';  
import { AbiturientWrapper } from './style';
import AbiturientBanner from './Banner';
import Form from "../HomePage/Form"
import AdmissionInfo from './AdmissionInfo';

const Abiturient = () => {
    return (
        <AbiturientWrapper>
            <Header/>
            <div className="main">
            <AbiturientBanner/>
            <Form/>
            <AdmissionInfo/>
            </div>
        </AbiturientWrapper>
    );
};

export default Abiturient;