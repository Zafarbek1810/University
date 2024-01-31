import { Tabs } from "antd";
import React from "react";
import Container from "../../../Common/Container";
import { EducationTypeWrapper } from "./style";
import { Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8 } from "./Item";
import { useTranslation } from "react-i18next";

const EducationType = () => {
  const { t } = useTranslation();

    const items = [
        {
            label: t("obrazovanie.tab1"),
            key: "1",
            children: <Item1 />,
        },
        {
            label: t("obrazovanie.tab2"),
            key: "2",
            children: <Item2 />,
        },
        {
            label: t("obrazovanie.tab3"),
            key: "3",
            children: <Item3 />,
        },  
        {
            label: t("obrazovanie.tab4"),
            key: "4",
            children: <Item4 />,
        },  
        {
            label: t("obrazovanie.tab5"),
            key: "5",
            children: <Item5 />,
        },  
        {
            label: t("obrazovanie.tab6"),
            key: "6",
            children: <Item6 />,
        },  
        {
            label: t("obrazovanie.tab7"),
            key: "7",
            children: <Item7 />,
        },  
        {
            label: t("obrazovanie.tab8"),
            key: "8",
            children: <Item8 />,
        },  
    ]

  return (
    <EducationTypeWrapper>
      <Container>
        <h3 className="title">{t("obrazovanie.title")}</h3>
        <p className="description">
          </p>
        <Tabs
          tabPosition="left"
          items={items}
        />
      </Container>
    </EducationTypeWrapper>
  );
};

export default EducationType;
