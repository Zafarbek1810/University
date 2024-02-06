import React, { useRef, useState } from "react";
import DashboardHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import { Wrapper } from "./style";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="layout__top">
          <DashboardHeader setOpen={setOpen} />
        </div>
        <div className="layout_bottom">
          <div className="layout__sidebar" style={!open ? {width:250} : {width:0}} >
            <Sidebar />
          </div>
          <div className="layout__right">
            <main className="layout__main">
              {children}
              </main>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default DashboardLayout;
