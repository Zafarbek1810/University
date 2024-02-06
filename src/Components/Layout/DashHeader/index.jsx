import React, { useEffect, useState } from "react";
import { DashboardHeaderWrapper } from "./DashboardHeader.style";
import { useContextSelector } from "use-context-selector";
import UserContext from "../../../Context/UserContext";
import { useRouter } from "next/router";
import MyLink from "../../Common/MyLink";
import { useConfirm } from "material-ui-confirm";
import { Popover } from "antd";
import UserSvg from "../../Common/Svgs/UserSvg";
import LogOutSvg from "../../Common/Svgs/LogOutSvg";
import AuthProvider from "../../../Data/AuthProvider";

const DashboardHeader = ({ setOpen }) => {
  const logoutContext = useContextSelector(
    UserContext,
    (ctx) => ctx.actions.logout
  );

  const router = useRouter();
  const confirm = useConfirm();
  const [data, setData] = useState({});

  const handleOpen = () => {
    setOpen((p) => !p);
  };

  const handleLogout = () => {
    confirm({
      title: "Haqiqatan ham tizimdan chiqmoqchimisiz?",
      confirmationText: "Ha",
      cancellationText: "Yo'q",
    })
      .then(() => {
        logoutContext();
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AuthProvider.getMe()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardHeaderWrapper>
      <div className="top">
        <div className="wrap">
          <div className="left">
            <MyLink to={"/dashboard/cabinet"} className="logo">
              <img src="/images/logo.svg" alt="" />
            </MyLink>
            <div className="menu-toggle" onClick={handleOpen}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="right">
            <Popover
              className="pop"
              content={
                <button
                  onClick={handleLogout}
                  style={{
                    background: "transparent",
                    color: "#000",
                    display: "flex",
                    border: "none",
                  }}
                >
                  <span>Chiqish</span> <LogOutSvg />
                </button>
              }
              trigger="click"
            >
              <h3>
                {data.first_name}  {data.last_name}
              </h3>
              <UserSvg />
            </Popover>

            {/* <button onClick={handleLogout} title="Chiqish">
              Chiqish <img src="/images/logout.png" alt="" />
            </button> */}
          </div>
        </div>
      </div>
    </DashboardHeaderWrapper>
  );
};

export default DashboardHeader;
