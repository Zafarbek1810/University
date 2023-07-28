import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import useWindowDimensions from "../../../../../Hooks/useWindow";

export const LINKS = [
  {
    name: "Abituriyentlar",
    path: "/",
    id: 1,
  },
  {
    name: "Biz haqimizda",
    path: "/",
    id: 2,
  },
  {
    name: "Chet elliklar uchun ta'lim",
    path: "/",
    id: 3,
  },
  {
    name: "O'quv dasturlari",
    path: "/",
    id: 4,
  },
  {
    name: "Talabalar",
    path: "/",
    id: 5,
  },
  {
    name: "Hamkorlar",
    path: "/",
    id: 6,
  },
  {
    name: "Aloqa",
    path: "/",
    id: 7,
  },
];

const MainHeader = ({ isFixed }) => {
  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);

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
            <img
              src="/images/logo.svg"
              width={100}
              height={72}
            />
          </MyLink>
        </div> 
     
          <ul className="links_cont">
            {LINKS.map(({ name, path, id }) => (
              <li key={id}>
                <MyLink
                  to={path}
                >
                  <div className="navs">
                    <p>{name}</p>
                  </div>
                </MyLink>
              </li>
            ))}
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
