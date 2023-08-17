import React from 'react';
import { Tab4Wrapper } from './style';
import MyLink from '../../../../Common/MyLink';

const Tab4 = () => {
    return (
        <Tab4Wrapper>
            <h3 className="title">
            МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
            </h3>
            <div className="btns">
                <MyLink to="/student">
                    <img src="/images/googlePlay.png" alt="" />
                </MyLink>
                <MyLink to="/student">
                <img src="/images/appStore.png" alt="" />
                </MyLink>
            </div>
        </Tab4Wrapper>
    );
};

export default Tab4;