import React from "react";
import { AboutWrapper } from "./style";
import Container from "../../../Common/Container";
import CountUp from "react-countup";
import { useVisibilityHook } from "react-observer-api";
import AboutIcon1 from "../../../Common/Svgs/AboutIcon1";
import AboutIcon2 from "../../../Common/Svgs/AboutIcon2";
import AboutIcon3 from "../../../Common/Svgs/AboutIcon3";
import AboutIcon4 from "../../../Common/Svgs/AboutIcon4";
import AboutIcon5 from "../../../Common/Svgs/AboutIcon5";
import AboutIcon6 from "../../../Common/Svgs/AboutIcon6";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const countData = [
    {
      count: 8,
      info: t("obakademiy.counter1"),
      duration: 3,
      initial: 0,
    },
    {
      count: 300,
      info: t("obakademiy.counter2"),
      duration: 3,
      initial: 0,
      suffix: "+",
    },
    {
      count: 6,
      info: t("obakademiy.counter3"),
      duration: 3,
      initial: 0,
      suffix: "+",
    },
  ];

  const cardData = [
    {
      icon: <AboutIcon1 />,
      title: t("obakademiy.card_title1"),
      descr: t("obakademiy.card_descr1"),
    },
    {
      icon: <AboutIcon2 />,
      title: t("obakademiy.card_title2"),
      descr: t("obakademiy.card_descr2"),
    },
    {
      icon: <AboutIcon3 />,
      title: t("obakademiy.card_title3"),
      descr: t("obakademiy.card_descr3"),
    },
    {
      icon: <AboutIcon4 />,
      title: t("obakademiy.card_title4"),
      descr: t("obakademiy.card_descr4"),
    },
    {
      icon: <AboutIcon5 />,
      title: t("obakademiy.card_title5"),
      descr: t("obakademiy.card_descr5"),
    },
    {
      icon: <AboutIcon6 />,
      title: t("obakademiy.card_title6"),
      descr: t("obakademiy.card_descr6"),
    },
  ];

  return (
    <AboutWrapper>
      <Container>
        <div className="top">
          <h4 className="title">{t("obakademiy.title")}</h4>
          <p className="descr">{t("obakademiy.descr")}</p>
          <div className="countUp">
            {countData.map((item) => (
              <CountAtom key={item.info} {...item} />
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="cards">
            {cardData.map((item) => (
              <div key={item.title} className="item">
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <h4 className="title">{item.title}</h4>
                  <p className="descr">{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AboutWrapper>
  );
};

const CountAtom = ({ count, duration, suffix, info, initial }) => {
  const { setElement, isVisible } = useVisibilityHook();

  return (
    <div className="item">
      <span className="inCount" ref={setElement}>
        {isVisible ? <CountUp end={count} duration={duration} /> : initial}
        {suffix}
      </span>
      <p className="info">{info}</p>
    </div>
  );
};

export default About;
