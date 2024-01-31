import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import StudentWrapper from "./style";
import Container from "../../Common/Container";
import { useRouter } from "next/router";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
import Tab4 from "./Tabs/Tab4";
import Tab5 from "./Tabs/Tab5";
import Tab6 from "./Tabs/Tab6";
import Tab7 from "./Tabs/Tab7";
import Tab8 from "./Tabs/Tab8";
import RightIconSvg from "../../Common/Svgs/RightIconSvg";
import FilterSvg from "../../Common/Svgs/FilterSvg";
import CloseIcon from "../../Common/Svgs/CloseIcon";
import { Drawer } from "antd";
import { useTranslation } from "react-i18next";

const Student = () => {
  const [activePage, setActivePage] = useState(1);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Tab1 />;
      break;
    }
    // case 2: {
    //   Component = <Tab2 />;
    //   break;
    // }
    case 3: {
      // Component = <Tab3 />;
      router.push("/login");
      break;
    }
    // case 4: {
    //   Component = <Tab4 />;
    //   break;
    // }
    // case 5: {
    //   Component = <Tab5 />;
    //   break;
    // }
    case 6: {
      Component = <Tab6 />;
      break;
    }
    case 7: {
      Component = <Tab7 />;
      break;
    }
    case 8: {
      Component = <Tab8 />;
      break;
    }
  }

  const tabMassiv = [
    {
      title: t("student.studentam.tab1"),
      id: 1,
    },
    // {
    //   title: "Расписание занятий",
    //   id: 2,
    // },
    {
      title: t("student.login.tab5"),
      id: 3,
    },
    // {
    //   title: "Мобильное приложение",
    //   id: 4,
    // },
    // {
    //   title: "Стоимость обучения",
    //   id: 5,
    // },
    {
      title: t("student.studsovet.tab2"),
      id: 6,
    },
    {
      title: t("student.library.tab3"),
      id: 7,
    },
    {
      title: t("student.employment.tab4"),
      id: 8,
    },
  ];

  return (
    <StudentWrapper>
      <Header />
      <Container>
        <div className="main">
          <button className="btn" onClick={showDrawer}>
            <FilterSvg /> Вкладки
          </button>
          <div className="tabs">
            {tabMassiv.map((item, index) => {
              return (
                <button
                  onClick={() => setActivePage(item.id)}
                  key={index}
                  className={`tab-item ${
                    activePage === item.id ? "active" : ""
                  }`}
                >
                  {item.title} <RightIconSvg />
                </button>
              );
            })}
          </div>
          <div className="component">{Component}</div>
        </div>
      </Container>
      <Footer />

      <Drawer
        title="Вкладки"
        closable={false}
        onClose={onClose}
        open={open}
        placement={"bottom"}
      >
        <button className="closeIcon" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="tabs-drawer">
          {tabMassiv.map((item, index) => {
            return (
              <button
                onClick={() => {setActivePage(item.id) ; onClose()}}
                key={index}
                className={`tab-item ${activePage === item.id ? "active" : ""}`}
              >
                {item.title} <RightIconSvg />
              </button>
            );
          })}
        </div>
      </Drawer>
    </StudentWrapper>
  );
};

export default Student;
