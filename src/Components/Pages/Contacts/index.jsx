import React from 'react';
import ContactsWrapper from './style';
import Header from "../Header"
import Footer from "../Footer"
import Banner from './Banner';
import Maps from './Maps';

const Contacts = () => {
    return (
        <ContactsWrapper>
            <Header/>
            <div className="main">
                <Banner/>
                <Maps/>
            </div>
            <Footer/>
        </ContactsWrapper>
    );
};

export default Contacts;