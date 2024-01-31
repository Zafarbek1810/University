import React from "react";
import { ItemWrapper } from "./style";
import { useTranslation } from "react-i18next";

const Item1 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab1")}</h4>
        <p className="descr">
        {t("obrazovanie.descr1")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item2 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab2")}</h4>
        <p className="descr">
        {t("obrazovanie.descr2")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item3 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab3")}</h4>
        <p className="descr">
        {t("obrazovanie.descr3")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item4 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab4")}</h4>
        <p className="descr">
        {t("obrazovanie.descr4")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item5 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab5")}</h4>
        <p className="descr">
        {t("obrazovanie.descr5")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item6 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab6")}</h4>
        <p className="descr">
        {t("obrazovanie.descr6")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item7 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab7")}</h4>
        <p className="descr">
        {t("obrazovanie.descr7")}
        </p>
      </div>
    </ItemWrapper>
  );
};
const Item8 = () => {
  const { t } = useTranslation();

  return (
    <ItemWrapper>
      <div className="item">
        <h4 className="title">{t("obrazovanie.tab8")}</h4>
        <p className="descr">
        {t("obrazovanie.descr8")}
        </p>
      </div>
    </ItemWrapper>
  );
};

export { Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8 };
