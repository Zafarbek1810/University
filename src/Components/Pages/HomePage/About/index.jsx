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

const countData = [
  {
    count: 2020,
    info: "Год основания",
    duration: 3,
    initial: 0,
  },
  {
    count: 12,
    info: "Программ бакалавриата",
    duration: 3,
    initial: 0,
  },
  {
    count: 100,
    info: "Партнеров Работодателей",
    duration: 3,
    initial: 0,
    suffix: "+",
  },
];

const cardData = [
  {
    icon: <AboutIcon1 />,
    title: "Международные стандарты обучения",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
  {
    icon: <AboutIcon2 />,
    title: "Возможность совмещать учебу и работу",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
  {
    icon: <AboutIcon3 />,
    title: "Практическая направленность",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
  {
    icon: <AboutIcon4 />,
    title: "Гибкая форма оплаты",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
  {
    icon: <AboutIcon5 />,
    title: "Государственный диплом",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
  {
    icon: <AboutIcon6 />,
    title: "Удобная форма обучения",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna",
  },
];

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <div className="top">
          <h4 className="title">ОБ АКАДЕМИИ</h4>
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
