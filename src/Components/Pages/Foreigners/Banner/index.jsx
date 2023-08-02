import React from "react";
import ForeignersBannerWrapper from "./style";
import Container from "../../../Common/Container";

const ForeignersBanner = () => {
  return (
    <ForeignersBannerWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <h2 className="title">
            ОБУЧЕНИЕ ДЛЯ ИНОСТРАННЫХ АБИТУРИЕНТОВ
            </h2>
          </div>
          <div className="right">
            <p className="descr">
            Московская Академия Предпринимательства основана 1997 Правительством Москвы. Приоритетной задачей для себя определена развития интернационализации во всех областях деятельности академии: образовательной, научной, внеучебной. Мы ежегодно содействуем в реализации федерального проекта «Экспорта образования»
            </p>
          </div>
        </div>
      </Container>
    </ForeignersBannerWrapper>
  );
};

export default ForeignersBanner;
