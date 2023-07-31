import React from "react";
import { TabWrapper } from "../../style";
import Card from "../Card";
import RightSvg from "../../../../../Common/Svgs/RightSvg";

const Tab1 = () => {
  return (
    <TabWrapper>
      <div className="cards">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index} className="card">
            <img src="/images/card.png" alt="" />
            <div className="bottom">
              <h5 className="title">ПРЕДПРИНИМАТЕЛЬСТВО</h5>
              <p className="descr">
              Не хотите зависеть от работодателя? Откройте собственное дело!
              </p>
              <button>Подробнее <RightSvg/> </button>
            </div>
          </div>
        ))}
      </div>
    </TabWrapper>
  );
};

export default Tab1;
