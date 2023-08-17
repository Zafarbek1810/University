import { styled } from "styled-components";

const HistoryWrapper = styled.div`
  padding: 72px 0;
  .wrapper {
    .top {
      display: flex;
      align-items: center;

      .left {
        width: 50%;

        img {
          width: 100%;
        }
      }

      .right {
        width: 50%;

        .title {
          color: #121926;
          font-family: SF Pro Display;
          font-size: 48px;
          font-weight: 600;
          line-height: 60px;
          margin-bottom: 48px;
        }

        .subtitle {
          color: #121926;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          margin-bottom: 24px;
        }

        p {
          color: #475467;
          font-family: SF Pro Display;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
        }
      }
    }

    .bottom {
      .texts {
        display: flex;
        padding: 48px 0;
        gap: 20px;

        h6 {
          width: 50%;
          color: #121926;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }

        p {
          width: 50%;
          color: #121926;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
        }
      }

      .cards {
        padding: 48px 0;
        display: flex;
        flex-wrap: wrap;

        .card {
          width: 50%;
          padding: 24px 20px;
          display: flex;
          align-items: center;

          .icon {
            width: 25%;
            border-radius: 100px;
            border: 8px solid #e5f1ff;
            background: #d3e7ff;
            width: 48px;
            height: 48px;
            position: relative;
            left: 0;
            transform: translateX(-50%);
            margin-bottom: 20px;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .text {
            width: 75%;
            color: #121926;
            font-family: SF Pro Display;
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
          }
        }
      }
    }
  }


  @media (max-width: 768px) {
    padding: 40px 0;
    .wrapper {
      .top {
        flex-direction: column;
        gap: 20px;

        .left {
          width: 100%;
          img {
            width: 100%;
          }

          .title {
            font-size: 32px;
            line-height: 40px;
            margin-bottom: 20px;
          }

          .subtitle {
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 20px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .right {
          width: 100%;
        }
      }

      .bottom {
        .texts {
          flex-direction: column;
          gap: 20px;

          h6 {
            width: 100%;
          }

          p {
            width: 100%;
          }
        }

        .cards {
          flex-direction: column;
          gap: 20px;

          .card {
            width: 100%;
            padding: 24px 20px;
            display: flex;
            align-items: center;

            .icon {
              width: 25%;
              border-radius: 100px;
              border: 8px solid #e5f1ff;
              background: #d3e7ff;
              width: 48px;
              height: 48px;
              position: relative;
              left: 0;
              transform: translateX(-50%);
              margin-bottom: 20px;

              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .text {
              width: 75%;
              color: #121926;
              font-family: SF Pro Display;
              font-size: 18px;
              font-weight: 500;
              line-height: 28px;
            }
          }
        }
      }
    }
  }


  @media (max-width: 576px) {
    padding: 40px 0;
    .wrapper {

      .top {
        flex-direction: column;
        gap: 20px;

        .left {
          width: 100%;
          img {
            width: 100%;
          }

          .title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 20px;
          }

          .subtitle {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 20px;
          }

          p {
            font-size: 14px;
            line-height: 20px;
          }
        }

        .right {
          width: 100%;
        }
      }

      .bottom {
        .texts {
          flex-direction: column;
          gap: 20px;

          h6 {
            width: 100%;
          }

          p {
            width: 100%;
          }
        }

        .cards {
          flex-direction: column;
          gap: 20px;

          .card {
            width: 100%;
            padding: 24px 20px;
            display: flex;
            align-items: center;

            .icon {
              width: 25%;
              border-radius: 100px;
              border: 8px solid #e5f1ff;
              background: #d3e7ff;
              width: 48px;
              height: 48px;
              position: relative;
              left: 0;
              transform: translateX(-50%);
              margin-bottom: 20px;

              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .text {
              width: 100%;
              color: #121926;
              font-family: SF Pro Display;
              font-size: 16px;
              font-weight: 500;
              line-height: 28px;
            }
          }
        }
      }
    }
  }




`;

export default HistoryWrapper;
