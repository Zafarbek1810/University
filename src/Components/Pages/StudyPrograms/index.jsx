import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import StudyProgramWrapper from './style';
import Programs from './Programs';
import Form from "../../Pages/HomePage/Form"

const StudyPrograms = () => {
    return (
        <StudyProgramWrapper>
        <Header/>
        <div className="mains">
            <Programs/>
            <Form/>
        </div>
        <Footer/>
        </StudyProgramWrapper>
    );
};

export default StudyPrograms;