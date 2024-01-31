import React from "react";
import { Tab8Wrapper } from "./style";
import Tab6Icon from "../../../../Common/Svgs/Tab6Icon";
import InfoTab1 from "./InfoTab1";
import InfoTab2 from "./InfoTab2";
import InfoTab3 from "./InfoTab3";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Tab8 = () => {
  const [activePage, setActivePage] = useState(1);
  const {t} = useTranslation()

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <InfoTab1 />;
      break;
    }
    case 2: {
      Component = <InfoTab2 />;
      break;
    }
    case 3: {
      Component = <InfoTab3 />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Что конкретно делаем?",
      id: 1,
    },
    {
      title: "Работодателям",
      id: 2,
    },
    {
      title: "Соискателю",
      id: 3,
    },
  ];

  return (
    <Tab8Wrapper>
      <h3 className="title">{t("student.employment.tab4")}</h3>
      <p className="descr">
      {t("student.employment.title")}
      </p>

      <div className="bottom">
        <div className="box1">
          <div className="svgs">
            <Tab6Icon />
            <Tab6Icon />
          </div>
          <p>
          {t("student.employment.subtitle")}
          </p>
        </div>
        <div className="box2">
          <h6>{t("student.employment.cardTitle")}</h6>
          <p>
          {t("student.employment.cardText")}
          </p>
        </div>
      </div>


      {/* <div className="info">
        <h3 className="title">ИНФОРМАЦИЯ</h3>
        <div className="tabs">
          {tabMassiv.map((item, index) => (
              <button
                onClick={() => setActivePage(item.id)}
                key={index}
                className={`tab-item ${activePage === item.id ? "active" : ""}`}
              >
                {item.title}
              </button>
            )
          )}
        </div>
        <div className="component">{Component}</div>
      </div> */}
    </Tab8Wrapper>
  );
};

export default Tab8;
