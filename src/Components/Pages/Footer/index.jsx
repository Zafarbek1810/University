import React from "react";
import FooterWrapper from "./style";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import FacebookSvg from "../../Common/Svgs/FacebookSvg";
import InstagramSvg from "../../Common/Svgs/InstagramSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import LogoSvg from "../../Common/Svgs/LogoSvg";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="wrapper">
          <div className="top">
            <div className="col">
              <div>Главный</div>
              <MyLink to="/">Абитуриентам</MyLink>
              <MyLink to="/">Обучение для иностранцев</MyLink>
              <MyLink to="/">Программы обучения</MyLink>
            </div>
            <div className="col">
              <div>О нас</div>
              <MyLink to="/">Партнерам</MyLink>
              <MyLink to="/">Контакты</MyLink>
              <MyLink to="/">Об Академии</MyLink>
            </div>
            <div className="col">
              <div>Связаться с нами</div>
              <MyLink to="/">+998 91 453 00 10</MyLink>
              <MyLink to="/">+998 91 453 00 10</MyLink>
              <MyLink to="/">name@gmail.com</MyLink>
            </div>
            <div className="col2">
              <div>Mобильное приложение</div>
              <div className="links">
                <MyLink to="/">
                  <img src="/images/googlePlay.png" alt="" />
                </MyLink>
                <MyLink to="/">
                  <img src="/images/appStore.png" alt="" />
                </MyLink>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="logo">
              <img src="/images/logo.svg" />
            </div>

            <div className="center">
              <MyLink to="/">ufa.uz - All rights reserved.</MyLink>
            </div>

            <div className="social">
              <MyLink to="/">
                <FacebookSvg />
              </MyLink>
              <MyLink to="/">
                <InstagramSvg />
              </MyLink>
              <MyLink to="/">
                <TelegramSvg />
              </MyLink>
            </div>
          </div>
          {/* <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="links">
            <MyLink to="/">Abituriyentlar</MyLink>
            <MyLink to="/">O&apos;quv dasturlari</MyLink>
            <MyLink to="/">Biz haqimizda</MyLink>
            <MyLink to="/">Talabalar</MyLink>
            <MyLink to="/">Chet elliklar uchun ta&apos;lim</MyLink>
            <MyLink to="/">Hamkorlar</MyLink>
          </div>
          <div className="social">
            <MyLink to="/">
              <FacebookSvg />
            </MyLink>
            <MyLink to="/">
              <InstagramSvg />
            </MyLink>
            <MyLink to="/">
              <TelegramSvg />
            </MyLink>
          </div> */}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
