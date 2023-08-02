import React from 'react';
import Header from "../Header"
import Footer from "../Footer"
import ForeignersBanner from './Banner';
import { ForeignersWrapper } from './style';
import Graudates from './Graudates';
import Form from '../HomePage/Form';

const Foreigners = () => {
    return (
        <ForeignersWrapper>
        <Header/>
        <div className="main">
            <ForeignersBanner/>
            <Graudates/>
            <Form/>

        </div>
            <Footer/>
        </ForeignersWrapper>
    );
};

export default Foreigners;