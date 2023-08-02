import { styled } from "styled-components";

const DormitoryWrapper = styled.div`
  padding: 72px 0;
  .top {
    margin-bottom: 48px;
    .title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      margin-bottom: 10px;
    }
    .descr {
      color: #475467;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  .wrapper {
    display: flex;
    .left {
      width: 50%;
      .item {
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        text-align: left;
        gap: 12px;
        margin-bottom: 48px;
        .icon {
          border-radius: 100px;
          border: 8px solid #e5f1ff;
          background: #d3e7ff;
          width: 48px;
          height: 48px;
          position: relative;
          padding: 12px;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        p {
          color: #121926;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
        }
      }
    }
    .right {
      width: 50%;
      padding: 32px;
      height: auto;
      border-radius: 16px;
      background: #f9f9f9;
      text-align: center;
      p {
        color: #121926;
        text-align: center;
        font-family: Inter;
        font-size: 36px;
        font-weight: 500;
        line-height: 48px;
      }

      img {
        margin-bottom: 24px;
      }

      .swiper{
        height: 105%;

        .swiper-slide:active{
          cursor: grab;
        }

        .swiper-pagination-bullet-active{
          background: #007AFF !important;
          width: 32px ;
          height:32px;
        }
        .swiper-pagination-bullet{
          background: #007AFF !important;
          width: 32px ;
          height:32px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 48px 0;
    .top {
      margin-bottom: 48px;
      .title {
        font-size: 36px;
        line-height: 48px;
      }
      .descr {
        font-size: 18px;
        line-height: 24px;
      }
    }
    .wrapper {
      flex-direction: column;
      gap: 0;
      .left {
        width: 100%;
        .item {
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          text-align: left;
          gap: 12px;
          margin-bottom: 48px;
          .icon {
            border-radius: 100px;
            border: 8px solid #e5f1ff;
            background: #d3e7ff;
            width: 48px;
            height: 48px;
            position: relative;
            padding: 12px;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          p {
            color: #121926;
            text-align: center;
            font-family: SF Pro Display;
            font-size: 24px;
            font-weight: 400;
            line-height: 32px;
          }
        }
      }
      .right {
        width: 100%;
        padding: 32px;
        height: auto;
        border-radius: 16px;
        background: #f9f9f9;
        text-align: center;
        p {
          color: #121926;
          text-align: center;
          font-family: Inter;
          font-size: 24px;
          font-weight: 500;
          line-height: 48px;
        }

        img {
          margin-bottom: 24px;
        }

        .swiper{
          height: 500px !important;
          .swiper-slide:active{
            cursor: grab;
          }

          .swiper-pagination-bullet-active{
            background: #007AFF !important;
            width: 24px ;
            height:24px;
          }
          .swiper-pagination-bullet{
            background: #007AFF !important;
            width: 24px ;
            height:24px;
          }
        }
      }
    }

  }

  @media (max-width: 576px) {
    padding: 48px 0;
    .top {
      margin-bottom: 48px;
      .title {
        font-size: 24px;
        line-height: 32px;
      }
      .descr {
        font-size: 16px;
        line-height: 24px;
      }
    }
    .wrapper {
      flex-direction: column;
      gap: 0;
      .left {
        width: 100%;
        .item {
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          text-align: left;
          gap: 12px;
          margin-bottom: 48px;

          .icon {
            border-radius: 100px;
            border: 8px solid #e5f1ff;
            background: #d3e7ff;
            width: 48px;
            height: 48px;
            position: relative;
            padding: 12px;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          p {
            color: #121926;
            text-align: center;
            font-family: SF Pro Display;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
      .right {
        width: 100%;
        padding: 32px;
        height: auto;
        border-radius: 16px;
        background: #f9f9f9;
        text-align: center;
        p {
          color: #121926;
          text-align: center;
          font-family: Inter;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }

        img {
          margin-bottom: 24px;
          width: 100%;
        }

        .swiper{
          height: 500px !important;
          .swiper-slide:active{
            cursor: grab;
          }

          .swiper-pagination-bullet-active{
            background: #007AFF !important;
            width: 24px ;
            height:24px;
          }
          .swiper-pagination-bullet{
            background: #007AFF !important;
            width: 24px ;
            height:24px;
          }
        }
      }
    }
  }

`;

export default DormitoryWrapper;
