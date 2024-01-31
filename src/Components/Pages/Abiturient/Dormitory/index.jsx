import React from "react";
import DormitoryWrapper from "./style";
import Container from "../../../Common/Container";
import ProcedIcon1 from "../../../Common/Svgs/ProcedIcon1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Dormitory = () => {
  const {t} = useTranslation();
  return (
    <DormitoryWrapper>
      <Container>
        <div className="top">
          <h3 className="title">{t("abiturient.dormitory.title")}</h3>
          <p className="descr">
          {t("abiturient.dormitory.descr")}
          </p>
        </div>
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li1")}</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li2")}</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li3")}</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li4")}</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li5")}</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>{t("abiturient.dormitory.li6")}</p>
            </div>
          </div>
          <div className="right">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/dormitory.png" alt="" />
                <p>{t("abiturient.dormitory.swiperText")}</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/dormitory.png" alt="" />
                <p>{t("abiturient.dormitory.swiperText")}</p>
                </SwiperSlide>
              <SwiperSlide>
                <img src="/images/dormitory.png" alt="" />
                <p>{t("abiturient.dormitory.swiperText")}</p>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </DormitoryWrapper>
  );
};

export default Dormitory;

