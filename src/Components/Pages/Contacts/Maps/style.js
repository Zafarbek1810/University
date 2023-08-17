import { styled } from "styled-components";

const MapWrapper = styled.div`
  padding: 72px 0;
  height: 100%;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    .maps {
      width: 50%;
      height: 326px;
    }

    .ymaps-2-1-79-map{
      width: 300px;
      height: 326px !important;

    }

    .info {
      width: 50%;

      h6 {
        color: #000;
        font-family: SF Pro Display;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        margin-top: 24px;
        margin-bottom: 12px;
      }

      p {
        color: #475467;
        font-family: SF Pro Display;
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
      }
    }
  }


  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      .maps {
        width: 100%;
        height: 326px;
      }

      .info {
        width: 100%;
        margin-top: 24px;
        h6 {
          font-size: 16px;
          line-height: 24px;
        }

        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }


  @media (max-width: 576px) {
    .wrapper {
      .ymaps-2-1-79-map{
        height: 200px !important;

      }
      .maps {
        height: 200px;
      }
    }
  }
  
`;

export default MapWrapper;
