import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import useWindowDimensions from "../../../../../Hooks/useWindow";
import { useRouter } from "next/router";

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
                <p className={router.pathname == "/" ? "active" : ""}>
                  Главный
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/abiturient">
              <div className="navs">
                <p className={router.pathname == "/abiturient" ? "active" : ""}>
                Абитуриентам
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/foreigners">
              <div className="navs">
                <p className={router.pathname == "/foreigners" ? "active" : ""}>
                  Обучение для иностранцев
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/program">
              <div className="navs">
                <p className={router.pathname == "/program" ? "active" : ""}>
                  Программы обучения
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/student">
              <div className="navs">
                <p className={router.pathname == "/student" ? "active" : ""}>
                  Студентам
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/partners">
              <div className="navs">
                <p className={router.pathname == "/partners" ? "active" : ""}>
                  Партнерам
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/academy">
              <div className="navs">
                <p className={router.pathname == "/academy" ? "active" : ""}>
                  Об Академии
                </p>
              </div>
            </MyLink>
          </li>
          <li>
            <MyLink to="/contacts">
              <div className="navs">
                <p className={router.pathname == "/contacts" ? "active" : ""}>
                  Контакты
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
