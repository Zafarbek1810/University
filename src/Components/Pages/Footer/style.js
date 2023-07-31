import { styled } from "styled-components";

const FooterWrapper = styled.div`
  padding: 24px 0;
  background: #000;

  .wrapper {
    .top {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;

      .col {
        display: flex;
        flex-direction: column;
        align-items: start;
        div {
          color: #fff;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin-bottom: 10px;
        }

        a {
          color: #98a2b3;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 10px;
        }
      }

      .col2 {
        display: flex;
        flex-direction: column;
        align-items: start;
        div {
          color: #fff;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin-bottom: 10px;
        }

        .links {
          display: flex;
          gap: 10px;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        svg {
          path {
            fill: #fff !important;
          }
          #Vector_20 {
            fill: #5300d6 !important;
          }
        }
      }

      .center {
        a {
          color: #98a2b3;
          font-family: SF Pro Display;
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
        }
      }

      .social {
        display: flex;
        gap: 20px;
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      .top {
        flex-direction: column;
        gap: 20px;
        .col {
          align-items: center;
        }
        .col2 {
          align-items: center;
          .links {
            flex-direction: column;
            gap: 10px;
          }
        }
      }
      .bottom {
        flex-direction: column;
        gap: 20px;
        .center {
          text-align: center;
        }
        .social {
          justify-content: center;
        }
      }
    }
  }
  

`;

export default FooterWrapper;
