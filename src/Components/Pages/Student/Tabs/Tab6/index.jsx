import React from "react";
import { Tab6Wrapper } from "./style";
import Tab6Icon from "../../../../Common/Svgs/Tab6Icon"
import { useTranslation } from "react-i18next";
const Tab6 = () => {
  const {t} = useTranslation()
  return (
    <Tab6Wrapper>
      <h3 className="title">{t("student.studsovet.tab2")}</h3>
      <p className="descr">
        {t("student.studsovet.title")}
      </p>

      <div className="bottom">
        <div className="box1">
            <div className="svgs">
            <Tab6Icon/>
            <Tab6Icon/>
            </div>
          <p>
          {t("student.studsovet.subtitle")}
          </p>
        </div>
        <div className="box2">
          <h6>{t("student.studsovet.cardTitle")}</h6>
          <p>
          {t("student.studsovet.cardText")}
          </p>
        </div>
      </div>
    </Tab6Wrapper>
  );
};

export default Tab6;
