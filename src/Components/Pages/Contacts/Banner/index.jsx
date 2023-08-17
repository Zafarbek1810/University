import React from 'react';
import BannerWrapper from './style';
import Container from '../../../Common/Container';

const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
                <div className="wrapper">
                    <div className="left-title">
                        <h3 className='title'>КОНТАКТЫ АКАДЕМИИ</h3>
                        <p className="location">125319, Москва,Метро «Аэропорт», ул. Планетная, 36</p>
                    </div>
                    <div className="right">
                        <p className="descr">От станции метро «Аэропорт» — первый вагон из центра, перед турникетами повернуть направо и подняться вверх по лестнице. На улице еще раз повернуть направо — перед вами будет ТЦ «Галерея Аэропорт». Обойдите его и двигайтесь прямо по улице Черняховского. Через 500 метров вы окажетесь на перекрестке с улицей Планетная — здесь тоже поверните направо. Через 200 метров по левую руку вы увидите пятиэтажное здание — это Московская Академия предпринимательства.</p>
                    </div>
                </div>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;