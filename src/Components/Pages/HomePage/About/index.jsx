import React from "react";
import { AboutWrapper } from "./style";
import Container from "../../../Common/Container";
import CountUp from "react-countup";
import { useVisibilityHook } from "react-observer-api";
import AboutIcon1 from "../../../Common/Svgs/AboutIcon1";

const countData = [
  {
    count: 2020,
    info: "yil tashkil topgan",
    duration: 3,
    initial: 0,
  },
  {
    count: 12,
    info: "Bakalavr dasturlari",
    duration: 3,
    initial: 0,
  },
  {
    count: 100,
    info: "Ish beruvchi hamkorlar",
    duration: 3,
    initial: 0,
    suffix: "+",
  },
];

const cardData = [
  {
    icon: <AboutIcon1 />,
    title: "Xalqaro ta'lim standartlari",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AboutIcon1 />,
    title: "O'qish va ishni birlashtirish ",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AboutIcon1 />,
    title: "Amaliy diqqat",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AboutIcon1 />,
    title: "Moslashuvchan to'lov shakli",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AboutIcon1 />,
    title: "Davlat diplomi",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AboutIcon1 />,
    title: "O'rganishning qulay shakli",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <div className="top">
          <h4 className="title">Akademiya haqida</h4>
          <p className="descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
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
                <div className="icon">
                  {item.icon}
                </div>
                <div className="text">
                  <h4 className="title">{item.title}</h4>
                  <p className="descr">
                    {item.descr}
                  </p>
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
