import React from "react";
import { CardWrapper } from "./style";
import { TabWrapper } from "../../style";

const Card = () => {
  return (
    <TabWrapper>
      <div className="card">
        <img src="/images/card.png" alt="" />
        <div className="bottom">
        <h5 className="title">Tadbirkorlik</h5>
        <p className="descr">
          Ish beruvchiga qaram bo'lishni xohlamaysizmi? O'z biznesingizni
          oching!
        </p>
        </div>
      </div>
    </TabWrapper>
  );
};

export default Card;
