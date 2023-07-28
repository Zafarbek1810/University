import { Tabs } from "antd";
import React from "react";
import Container from "../../../Common/Container";
import { EducationTypeWrapper } from "./style";
import { Item1, Item2, Item3, Item4, Item5, Item6 } from "./Item";

const EducationType = () => {
    const items = [
        {
            label: "01 Universitetdan oldingi tayyorgarlik",
            key: "1",
            children: <Item1 />,
        },
        {
            label: "02 Oliy ma'lumot (bakalavr darajasi)",
            key: "2",
            children: <Item2 />,
        },
        {
            label: "03 Kollej",
            key: "3",
            children: <Item3 />,
        },  
        {
            label: "04 Uzluksiz ta'lim dasturi",
            key: "4",
            children: <Item4 />,
        },  
        {
            label: "05 Akademiya xabarchisi",
            key: "5",
            children: <Item5 />,
        },  
        {
            label: "06 Boshqaruv mukammalligi oliy maktabi",
            key: "6",
            children: <Item6 />,
        },  
    ]

  return (
    <EducationTypeWrapper>
      <Container>
        <h3 className="title">Ta’lim turlari</h3>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
        <Tabs
          tabPosition="left"
          items={items}
        />
      </Container>
    </EducationTypeWrapper>
  );
};

export default EducationType;
