import React, { useContext } from "react";
import TopHeaderWrapper from "./TopHeaderWrapper";
import MyLink from "../../../../Common/MyLink";
import ClockSvg from "../../../../Common/Svgs/ClockSvg";
import PhoneSvg from "../../../../Common/Svgs/PhoneSvg";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { HeaderContext } from "../../../../../Context/HeaderContext";

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const defaultLang = i18n.language;
  const { setBurger } = useContext(HeaderContext);

  console.log({useTranslation});

  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    // i18n.changeLanguage(e);
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
          <a href="tel:998999999999">
            <PhoneSvg />
            +99 871-140-11-48
          </a>
          <div className="lang">
            <Select
              placeholder="UZ"
              id="lang"
              value={defaultLang}
              getPopupContainer={(trigger) => trigger.parentElement}
              style={{
                width: 80,
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
                  value: "en",
                  label: "ENG",
                },
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
          <button className="myBtn">Ro’yxatdan o‘tish</button>
        </div>
      </div>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
