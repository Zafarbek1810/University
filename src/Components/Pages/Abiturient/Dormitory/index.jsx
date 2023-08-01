import React from "react";
import DormitoryWrapper from "./style";
import Container from "../../../Common/Container";
import ProcedIcon1 from "../../../Common/Svgs/ProcedIcon1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Dormitory = () => {
  return (
    <DormitoryWrapper>
      <Container>
        <div className="top">
          <h3 className="title">ОБЩЕЖИТИЕ</h3>
          <p className="descr">
            Для проживания наших студентов мы предоставляем комфортные и
            оснащенные комнаты.
          </p>
        </div>
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Проживание только для студентов</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Удобное расположение</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Регистрация иностранных граждан</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Охрана территории 24/7</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Спортзал</p>
            </div>
            <div className="item">
              <div className="icon">
                <ProcedIcon1 />
              </div>
              <p>Столовая</p>
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
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </DormitoryWrapper>
  );
};

export default Dormitory;
