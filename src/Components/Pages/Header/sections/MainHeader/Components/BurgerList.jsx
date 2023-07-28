import React, {  useContext, useState } from "react";
import MyLink from "../../../../../Common/MyLink";
import { HeaderContext } from "../../../../../../Context/HeaderContext";
import { LINKS } from "../MainHeader";

const BurgerList = ({ burger }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
  const { setBurger } = useContext(HeaderContext);

  return (
    <div className={`burger-list-wrapper ${burger ? "open" : "close"}`}>
      <ul className="burger-list">
        {LINKS.map(({ name, path, id }) => (
          <li key={id} className="burger-item">
           <MyLink
                onClick={() => setBurger(false)}
                to={path}
                className="burger-link"
              >
                {name}
              </MyLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerList;
