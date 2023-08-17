import React from "react";
import MapWrapper from "./style";
import Container from "../../../Common/Container";
import { Map, Placemark, YMaps } from "react-yandex-maps";

const Maps = () => {
  return (
    <MapWrapper>
      <Container>
        <div className="wrapper">
          <div className="maps">
            <YMaps style={{ width: "100%", height: "100%" }}>
              <Map
                style={{
                  width: "100%",
                  height:700,
                  borderRadius: 10,
                  overflow: "hidden",
                  autoFitToViewport: 'always'
                }}
                defaultState={{
                  center: [41.29578559999999, 69.2720369],
                  zoom: 15,
                }}
              >
                <Placemark geometry={[41.29578559999999, 69.2720369]}/>
              </Map>
            </YMaps>
          </div>
          <div className="info">
            <h6>КОНСУЛЬТАЦИИ ДЛЯ СТУДЕНТОВ И АБИТУРИЕНТОВ</h6>
            <p>+998 91 453 00 10</p>
            <p>+998 91 436 00 10</p>
            <h6>ОБЩАЯ ПОЧТА АКАДЕМИИ</h6>
            <p>name@gmail.com</p>
            <h6>ПОЧТА ЖАЛОБ И ПРЕДЛОЖЕНИЙ</h6>
            <p>name@gmail.com</p>
          </div>
        </div>
      </Container>
    </MapWrapper>
  );
};

export default Maps;
