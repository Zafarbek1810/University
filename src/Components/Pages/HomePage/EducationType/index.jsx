import { Tabs } from "antd";
import React from "react";
import Container from "../../../Common/Container";
import { EducationTypeWrapper } from "./style";
import { Item1, Item2, Item3, Item4, Item5, Item6 } from "./Item";

const EducationType = () => {
    const items = [
        {
            label: "Довузовская подготовка",
            key: "1",
            children: <Item1 />,
        },
        {
            label: "Высшее образование (бакалавриат)",
            key: "2",
            children: <Item2 />,
        },
        {
            label: "Колледж",
            key: "3",
            children: <Item3 />,
        },  
        {
            label: "Программа непрерывного образования",
            key: "4",
            children: <Item4 />,
        },  
        {
            label: "Высшая школа управленческого мастерства",
            key: "5",
            children: <Item5 />,
        },  
        {
            label: "Вестник академии",
            key: "6",
            children: <Item6 />,
        },  
    ]

  return (
    <EducationTypeWrapper>
      <Container>
        <h3 className="title">ВИДЫ ОБРАЗОВАНИЯ</h3>
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
