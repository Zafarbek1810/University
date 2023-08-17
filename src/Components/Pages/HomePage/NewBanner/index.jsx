import React from 'react';
import NewBannerWrapper from './style';
import Container from "../../../Common/Container"

const NewBanner = () => {
    return (
        <NewBannerWrapper>
            <Container>
                <div className="wrapper">
                    <div className="left">
                        <h1 className="title">НОВЫЕ ЦЕЛИ ТРЕБУЮТНОВЫХ ЗНАНИЙ</h1>
                        <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="right">
                        <img src="/images/right.png" alt="" />
                    </div>
                </div>
            </Container>
        </NewBannerWrapper>
    );
};

export default NewBanner;