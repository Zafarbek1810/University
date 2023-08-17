import React from "react";
import { Tab7Wrapper } from "./style";
import MyLink from "../../../../Common/MyLink";

const Tab7 = () => {
  return (
    <Tab7Wrapper>
      <h3 className="title">ЭЛЕКТРОННАЯ БИБЛИОТЕКА</h3>
      <p className="descr">
        Электронные библиотечные системы и ресурсы научной библиотеки:
      </p>

      <div className="box">
        <h5 className="title">
          BOOK.RU Электронные библиотечные системы и ресурсы научной библиотеки:
        </h5>
        <p>
          BOOK.RU — это электронно-библиотечная система для учебных заведений.
          Содержит электронные версии учебников, учебных и научных пособий,
          монографий по различным областям знанийЭБС BOOK.RU на сегодня содержит
          более 15 000 изданий
        </p>
        <MyLink to="/student">Перейти в библиотеку</MyLink>
      </div>
    </Tab7Wrapper>
  );
};

export default Tab7;
