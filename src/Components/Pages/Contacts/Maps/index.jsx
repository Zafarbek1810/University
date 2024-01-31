import React from "react";
import MapWrapper from "./style";
import Container from "../../../Common/Container";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { useTranslation } from "react-i18next";

const Maps = () => {
  const {t} = useTranslation();
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
                  center: [41.475685, 60.778759],
                  zoom: 15,
                }}
              >
                <Placemark geometry={[41.475685, 60.778759]}/>
              </Map>
            </YMaps>
          </div>
          <div className="info">
            <h6>{t("contacts.number")}</h6>
            <p>+998 91 436 00 10</p>
            <p>+998 91 435 00 10</p>
            <h6>{t("contacts.email")}</h6>
            <p>uftu.vakolatxonasi@gmail.com</p>
            <h6>{t("contacts.pochta")}</h6>
            <p>uftu.vakolatxonasi@gmail.com</p>
          </div>
        </div>
      </Container>
    </MapWrapper>
  );
};

export default Maps;
