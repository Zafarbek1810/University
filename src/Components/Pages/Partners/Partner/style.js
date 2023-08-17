import { styled } from "styled-components";

const PartnerWrapper = styled.div`
  padding: 72px 0;

  h3.title {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 48px;
  }

  .middle {
    margin-bottom: 3rem;
    p.title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
      margin-bottom: 24px;
    }

    .tabs {
      width: 70%;
      text-align: center !important;
      margin-bottom: 48px;
      flex-direction: row;
      margin: auto;

      button {
        background: transparent;
        border: none;
        outline: none;
        color: #121926;
        padding: 10px 16px;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        cursor: pointer;
        margin-bottom: 44px;

        &:hover {
          color: #007aff;
        }
      }

      .active {
        color: #007aff;
      }
    }

    .component {
      width: 100%;
      div {
        width: 100%;
      }
    }
  }

  .bottom {
    p.title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
      margin-bottom: 24px;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .card {
        width: 30%;
        margin-bottom: 20px;

        .img-top {
          padding: 40px;
          border-radius: 10px;
          border: 1px solid #d0d5dd;
          img {
            height: 150px;
            width: 100%;
            object-fit: contain;
          }
        }

        .text {
          color: #121926;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;

    h3.title {
      font-size: 32px;
      line-height: 40px;
      padding: 40px 0;
    }

    .middle {
      margin-bottom: 3rem;
      p.title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 24px;
      }

      .tabs {
        width: 100%;
        text-align: center !important;
        margin-bottom: 48px;
        flex-direction: row;
        margin: auto;

        button {
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 44px;
        }
      }

      .component {
        width: 100%;
        div {
          width: 100%;
        }
      }
    }

    .bottom {
      p.title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 24px;
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
          width: 47%;
          margin-bottom: 20px;

          .img-top {
            padding: 40px;
            border-radius: 10px;

            img {
              height: 150px;
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 40px 0;

    h3.title {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 20px;
    }

    .middle {
      margin-bottom: 3rem;
      p.title {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 24px;
      }

      .tabs {
        width: 100%;
        text-align: center !important;
        margin-bottom: 20px;

        button {
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 14px;
        }
      }
    }
  }

`;

const TabsWrapper = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .box {
      width: 15% !important;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #d0d5dd;
      margin-bottom: 1rem;

      img {
        height: 100px;
        width: 100%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      .box {
        width: 30% !important;
      }
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      .box {
        width: 47% !important;
      }
    }
  }
`;

export { PartnerWrapper, TabsWrapper };
