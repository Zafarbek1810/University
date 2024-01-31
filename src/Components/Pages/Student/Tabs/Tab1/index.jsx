import React from "react";
import { AccordionWrapper, Tab1Wrapper } from "./style";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
const { Panel } = Collapse;


const Tab1 = () => {
  const {t} = useTranslation()
  return (
    <Tab1Wrapper>
      <h3 className="title">{t("student.studentam.tab1")}</h3>
      <p className="descr">
      {t("student.studentam.descr")}
      </p>

      <div className="box">
        <p className="text1">
        {t("student.studentam.cardTitle1")}
        </p>
        <p className="text2">
        {t("student.studentam.cardDescr1")}
        </p>
      </div>

      <div className="accordions">
        <Collapse accordion bordered={false} defaultActiveKey={1}>
          <Panel header={t("student.studentam.cardTitle2")}>
            <Accordion1 />
          </Panel>
          <Panel header={t("student.studentam.cardTitle3")}>
            <Accordion2 />
          </Panel>
        </Collapse>
      </div>
    </Tab1Wrapper>
  );
};

const Accordion1 = () => {
  const {t} = useTranslation()
  return (
    <AccordionWrapper className="text1">
      <li className="title">{t("student.studentam.liTitle1")}</li>
      <p className="descr">
      {t("student.studentam.liText1")}
      </p>
      <li className="title">{t("student.studentam.liTitle2")}</li>
      <p className="descr">
      {t("student.studentam.liText2")}
      </p>
      <li className="title">{t("student.studentam.liTitle3")}</li>
      <p className="descr">
      {t("student.studentam.liText3")}
      </p>
      <li className="title">{t("student.studentam.liTitle4")}</li>
      <p className="descr">
      {t("student.studentam.liText4")}
      </p>
      <li className="title">{t("student.studentam.liTitle5")}</li>
      <p className="descr">
      {t("student.studentam.liText5")}
      </p>
      <li className="title">{t("student.studentam.liTitle6")}</li>
      <p className="descr">
      {t("student.studentam.liText6")}
      </p>
      <li className="title">{t("student.studentam.liTitle7")}</li>
      <p className="descr">
      {t("student.studentam.liText7")}
      </p>
      <li className="title">{t("student.studentam.liTitle8")}</li>
      <p className="descr">
      {t("student.studentam.liText8")}
      </p>
      <li className="title">{t("student.studentam.liTitle9")}</li>
      <p className="descr">
      {t("student.studentam.liText9")}
      </p>
      <li className="title">{t("student.studentam.liTitle10")}</li>
      <p className="descr">
      {t("student.studentam.liText10")}
      </p>
    </AccordionWrapper>
  );
};
const Accordion2 = () => {
  const {t} = useTranslation()
  return (
    <AccordionWrapper className="text1">
      <li className="title">{t("student.studentam.liTitle11")}</li>
      <p className="descr">
      {t("student.studentam.liText11")}
      </p>
      <li className="title">{t("student.studentam.liTitle12")}</li>
      <p className="descr">
      {t("student.studentam.liText12")}
      </p>
      <li className="title">{t("student.studentam.liTitle13")}</li>
      <p className="descr">
      {t("student.studentam.liText13")}
      </p>
    </AccordionWrapper>
  );
};

export default Tab1;
