import React from "react";
import { TabsWrapper } from "../style";

const TabPartners2 = () => {
  return (
    <TabsWrapper>
      <div className="wrapper">
        {[...Array(12)].map((item, index) => (
          <div className="box" key={index}>
            <img src="/images/partners2.png" alt="" />
          </div>
        ))}
      </div>
    </TabsWrapper>
  );
};

export default TabPartners2;
