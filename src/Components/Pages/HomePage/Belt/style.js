import { styled } from "styled-components";

const BeltWrapper = styled.div`
  background-color: #007aff;
  text-align: center;
  padding: 72px 0;

  .belt {
    .logo {
        path {
          fill: #fff !important;
        }
    }
    .title {
      color: #fff;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 500;
      line-height: 60px;
    }
  }


  @media (max-width: 768px) {
    .belt {
      .title {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;

        img{
          height: 24px;
        }

      }
    }
  }

  @media (max-width: 576px) {
    .belt {
      .title {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
      }
    }
  }


`;

export { BeltWrapper };
