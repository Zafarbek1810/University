import React, { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "../../../Context/HeaderContext";
import HeaderWrapper from "./HeaderWrapper";
import TopHeader from "./sections/TopHeader/TopHeader";
import useWindowDimensions from "../../../Hooks/useWindow";
import { useContextSelector } from "use-context-selector";
import MainHeader from "./sections/MainHeader/MainHeader";

const Header = ({ isFixed }) => {
  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);

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
    <>
      <TopHeader />
      <MainHeader isFixed={isFixed}/>
    </>
  );
};

export default Header;
