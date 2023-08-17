import React from 'react';
import LoginPageWrapper from './style';
import Header from '../Header';
import Login from './Login';

const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <Header/>
            <div className="main">
                <Login/>
            </div>
        </LoginPageWrapper>
    );
};

export default LoginPage;