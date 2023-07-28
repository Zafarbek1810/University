import { styled } from "styled-components";

const AboutWrapper = styled.div`
  padding: 72px 0;
  .top {
    width: 100%;
    text-align: center;
    margin: auto;
    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
    }
    .descr {
      color: #475467;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      width: 645px;
      margin: auto;
    }
    .countUp {
      display: flex;
      justify-content: space-between;
      margin: 48px 0;
      padding: 48px 58px;
      border-radius: 16px;
      background: #f9fafb;

      .item {
        span {
          color: #007aff;
          font-family: SF Pro Display;
          font-size: 72px;
          font-weight: 600;
          line-height: 60px;
        }
        .info {
          color: #121926;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
      }
    }
  }

  .bottom {
    .cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .item {
        width: 33%;
        padding: 24px 20px;
        text-align: center;
        .icon {
          border-radius: 100px;
          border: 8px solid #e5f1ff;
          background: #d3e7ff;
          width: 48px;
          height: 48px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 20px;
          svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .text {
          .title {
            color: #121926;
            text-align: center;
            font-family: SF Pro Display;
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
          }
          .descr {
            color: #475467;
            text-align: center;
            font-family: SF Pro Display;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
          }
        }
      }
    }
  }


  @media (max-width: 768px) {
    .top {
      .title {
        font-size: 32px;
        line-height: 40px;
      }
      .descr {
        font-size: 16px;
        line-height: 24px;
        width: 100%;
      }
      .countUp {
        flex-direction: column;
        padding: 24px 20px;
        .item {
          width: 100%;
          margin-bottom: 24px;
          text-align: center;
          .icon {
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;

            svg{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .text {
            .title {
              font-size: 20px;
              line-height: 28px;
            }
            .descr {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
    .bottom {
      .cards {
        .item {
          width: 100%;
          padding: 24px 20px;
          text-align: center;
          .icon {
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;

            svg{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .text {
            .title {
              font-size: 20px;
              line-height: 28px;
            }
            .descr {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .top {
      .title {
        font-size: 24px;
        line-height: 32px;
      }
      .descr {
        font-size: 14px;
        line-height: 22px;
        width: 100%;
      }
      .countUp {
        flex-direction: column;
        padding: 24px 20px;
        .item {
          width: 100%;
          margin-bottom: 24px;
          text-align: center;
          .icon {
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;

            svg{
              position: absolute;
              top: 50%;

              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .text {
            .title {
              font-size: 20px;
              line-height: 28px;
            }
            .descr {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
    .bottom {
      .cards {
        .item {
          width: 100%;
          padding: 24px 20px;
          text-align: center;
          .icon {
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;

            svg{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .text {
            .title {
              font-size: 20px;
              line-height: 28px;
            }
            .descr {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }


  
`;

export { AboutWrapper };
