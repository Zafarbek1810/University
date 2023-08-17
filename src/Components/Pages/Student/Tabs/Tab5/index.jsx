import React from "react";
import { Tab5Wrapper } from "./style";
import Comp1 from "./Components/Comp1";
import { useState } from "react";
import { Select } from "antd";

const Tab5 = () => {
  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Comp1 />;
      break;
    }
    case 2: {
      Component = <Comp1 />;
      break;
    }
    case 3: {
      Component = <Comp1 />;
      break;
    }
  }

  const tabMassiv = [
    {
      label: "Основные сведения",
      value: 1,
    },
    {
      label: "Доступная среда",
      value: 2,
    },
    {
      label: "Руководство. Педагогический (научно-педагогический) состав",
      value: 3,
    },
    {
      label: "Образование",
      value: 4,
    },
    {
      label: "Структура и органы управления образовательной организацией",
      value: 5,
    },
    {
      label: "Документы",
      value: 6,
    },
    {
      label: "Образовательные стандарты и требования",
      value: 7,
    },
    {
      label: "Платные образовательные услуги",
      value: 8,
    },
    {
      label:
        "Материально-техническое обеспечение и оснащенность образовательного процесса",
        value: 9,
    },
    {
      label: "Международное сотрудничество",
      value: 10,
    },
    {
      label: "Стипендии и иные виды материальной поддержки",
      value: 11,
    },
    {
      label: "Финансово-хозяйственная деятельность",
      value: 12,
    },
    {
      label: "Вакантные места для приема (перевода) обучающихся",
      value: 13,
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setActivePage(value)
  };

  return (
    <Tab5Wrapper>
      <div className="wrap">
        <div className="top_btns">
          <div className="selects">
            <Select
              defaultValue={{
                label: "Основные сведения",
                value: 1,
              }}
              style={{
                width: 120,
              }}
              onChange={(v)=>handleChange(v)}
              options={tabMassiv}
            />
          </div>
          {tabMassiv.map((item, index) => (
            <button
              onClick={() => setActivePage(item.value)}
              key={index}
              className={`tab-item ${activePage === item.value ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <h3 className="title">ПЛАТНЫЕ ОБРАЗОВАТЕЛЬНЫЕ УСЛУГИ</h3>
        <div className="component">{Component}</div>
      </div>
    </Tab5Wrapper>
  );
};

export default Tab5;
