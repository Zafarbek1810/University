import React, { useContext } from "react";
import TopHeaderWrapper from "./TopHeaderWrapper";
import MyLink from "../../../../Common/MyLink";
import ClockSvg from "../../../../Common/Svgs/ClockSvg";
import PhoneSvg from "../../../../Common/Svgs/PhoneSvg";
import { Select } from "antd";
import { useTranslation } from "react-i18next"
import { HeaderContext } from "../../../../../Context/HeaderContext";
import i18next from "i18next";

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const defaultLang = i18next.language;
  const { setBurger } = useContext(HeaderContext);


  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    i18n.changeLanguage(e)
  };


  return (
    <TopHeaderWrapper>
      <div className="content">
          <MyLink className="logo" to="/" onClick={() => setBurger((p) => !p)}>
            <img src="/images/logo.svg" width={100} height={72} />
          </MyLink>
        <div className="right_side">
          <span>
            <ClockSvg />
            09:00 - 18:00
          </span>
          <a href="tel:998914350010">
            <PhoneSvg />
            +998 91-435-00-10

          </a>
          <a href="tel:998914360010">
            <PhoneSvg />
            +998 91-436-00-10

          </a>
          <div className="lang">
            <Select
              placeholder="RU"
              id="lang"
              value={defaultLang}
              // getPopupContainer={(trigger) => trigger.parentElement}
              style={{
                width: 80,
              }}
              defaultValue={{
                value: "ru",
                label: "РУС",
              }}
              onChange={handleChange}
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "uz",
                  label: "UZB",
                },
                {
                  value: "ru",
                  label: "РУС",
                },
              ]}
            />
          </div>
          <MyLink to='/login' className="myBtn">Kirish</MyLink>
        </div>
      </div>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
