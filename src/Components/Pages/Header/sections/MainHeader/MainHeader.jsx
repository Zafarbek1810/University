import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const LINKS = [
  {
    name: "Главный",
    path: "/",
    id: 0,
  },
  {
    name: "Абитуриентам",
    path: "/abiturient",
    id: 1,
  },
  {
    name: "Обучение для иностранцев",
    path: "/foreigners",
    id: 2,
  },
  {
    name: "Программы обучения",
    path: "/program",
    id: 3,
  },
  {
    name: "Студентам",
    path: "/student",
    id: 4,
  },
  {
    name: "Партнерам",
    path: "/partners",
    id: 5,
  },
  {
    name: "Об Академии",
    path: "/academy",
    id: 6,
  },
  {
    name: "Контакты",
    path: "/contacts",
    id: 7,
  },
];

const MainHeader = ({ isFixed }) => {
  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);
  const router = useRouter();
  const { t } = useTranslation();

  console.log(t)

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 180) {
        return setHeader("header");
      } else if (window.scrollY > 180) {
        return setHeader("header2");
      }
    };
    const listenClickWindow = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (
        path.includes(document.querySelector(".content.header")) ||
        path.includes(document.querySelector(".content.header2"))
      ) {
      } else {
        setBurger(false);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("click", listenClickWindow);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("click", listenClickWindow);
    };
  }, []);

  return (
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/" onClick={() => setBurger((p) => !p)}>
            <img src="/images/logo.svg" width={100} height={72} />
          </MyLink>
        </div>

        <ul className="links_cont">
          <li>
            <MyLink to="/">
              <div className="navs">
                <p  className={router.pathname == "/" ? "active" : ""}>
                {t("header.link1")}
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/abiturient">
              <div className="navs">
                <p  className={router.pathname == "/abiturient" ? "active" : ""}>
                {t("header.link2")}
                </p>
              </div>
            </MyLink>
          </li>
          {/* <li>
            <MyLink to="/foreigners">
              <div className="navs">
                <p className={router.pathname == "/foreigners" ? "active" : ""}>
                {t("header.link3")}
                </p>
              </div>
            </MyLink>
          </li> */}
          {/* <li>
            <MyLink to="/program">
              <div className="navs">
                <p className={router.pathname == "/program" ? "active" : ""}>
                {t("header.link4")}
                </p>
              </div>
            </MyLink>
          </li> */}
          <li>
            <MyLink to="/student">
              <div className="navs">
                <p  className={router.pathname == "/student" ? "active" : ""}>
                {t("header.link5")}
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/partners">
              <div className="navs">
                <p  className={router.pathname == "/partners" ? "active" : ""}>
                {t("header.link6")}
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/academy">
              <div className="navs">
                <p  className={router.pathname == "/academy" ? "active" : ""}>
                {t("header.link7")}
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/contacts">
              <div className="navs">
                <p  className={router.pathname == "/contacts" ? "active" : ""}>
                {t("header.link8")}
                </p>
              </div>
            </MyLink>
          </li>
        </ul>
        <div
          onClick={handleBurger}
          className={`burger-btn ${burger ? "open" : "close"}`}
        >
          <span></span>
        </div>
        <BurgerList burger={burger} />
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
