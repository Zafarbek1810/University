import React from "react";
import { TabsWrapper } from "../style";

const TabPartners1 = () => {
  return (
    <TabsWrapper>
      <div className="wrapper">
        {[...Array(12)].map((item, index) => (
          <div className="box" key={index}>
            <img src="/images/partners1.png" alt="" />
          </div>
        ))}
      </div>
    </TabsWrapper>
  );
};

export default TabPartners1;
