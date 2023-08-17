import React from "react";
import { Tab2Wrapper } from "./style";
import { Select } from "antd";
import { useState } from "react";
import Today from "./Today";
import Tomorrow from "./Tomorrow";
import Week from "./Week";
import Month from "./Mounth";
import Semestr from "./Semestr";
import PaperSvg from "../../../../Common/Svgs/PaperSvg"

const Tab2 = () => {
  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Today />;
      break;
    }
    case 2: {
      Component = <Tomorrow />;
      break;
    }
    case 3: {
      Component = <Week />;
      break;
    }
    case 4: {
      Component = <Month />;
      break;
    }
    case 5: {
      Component = <Semestr />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Сегодня",
      id: 1,
    },
    {
      title: "Завтра",
      id: 2,
    },
    {
      title: "Неделя",
      id: 3,
    },
    {
      title: "Месяц",
      id: 4,
    },
    {
      title: "Cеместр",
      id: 5,
    },
  ];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };


  return (
    <Tab2Wrapper>
      <div className="top">
        <h3 className="title">РАСПИСАНИЕ</h3>
        <Select
          defaultValue={
            {value: "1",
            label: "ПДБМ-101ПР ",}
          }
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "1",
              label: "ПДБМ-101ПР ",
            },
            {
              value: "2",
              label: "ПДБМ-101ПР ",
            },
            {
              value: "3",
              label: "ПДБМ-101ПР ",
            }            
          ]}
        />
      </div>
      <div className="bottom">
      <div className="tabs-raspisaniya">
          <div className="tab">
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
        <button className="download"><PaperSvg/></button>
          </div>
        <div className="component">{Component}</div>
      </div>
    </Tab2Wrapper>
  );
};

export default Tab2;
