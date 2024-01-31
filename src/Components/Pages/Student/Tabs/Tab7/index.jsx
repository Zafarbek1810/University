import React from "react";
import { Tab7Wrapper } from "./style";
import MyLink from "../../../../Common/MyLink";
import { useTranslation } from "react-i18next";

const Tab7 = () => {
  const { t } = useTranslation();
  return (
    <Tab7Wrapper>
      <h3 className="title">{t("student.library.tab3")}</h3>
      <p className="descr">{t("student.library.subtitle")}</p>

      <div className="box">
        <h5 className="title">{t("student.library.cardTitle")}</h5>
        <p>{t("student.library.cardText")}</p>
        {/* <MyLink to="/student">Перейти в библиотеку</MyLink> */}
      </div>
    </Tab7Wrapper>
  );
};

export default Tab7;
