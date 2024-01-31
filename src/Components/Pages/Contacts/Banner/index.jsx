import React from 'react';
import BannerWrapper from './style';
import Container from '../../../Common/Container';
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t } =useTranslation();
    return (
        <BannerWrapper>
            <Container>
                <div className="wrapper">
                    <div className="left-title">
                        <h3 className='title'>{t("contacts.title")}</h3>
                        <p className="location">{t("contacts.subtitle")}</p>
                    </div>
                    <div className="right">
                        <p className="descr">{t("contacts.descr")}</p>
                    </div>
                </div>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;