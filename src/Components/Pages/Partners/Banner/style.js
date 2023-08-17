import { styled } from "styled-components";

const BannerWrapper = styled.div`
  h3.title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    padding: 72px 0;
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
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .text {
          .descr {
            color: #121926;
            text-align: center;
            font-family: SF Pro Display;
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    h3.title {
      font-size: 32px;
      line-height: 40px;
      padding: 40px 0;
    }

    .bottom {
      .cards {
        .item {
          width: 50%;
          padding: 24px 20px;
          text-align: center;

          .text {
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
    .cards{
      height: 200px;
      display: flex !important;
      flex-wrap: nowrap !important;
      overflow-x: scroll;
      gap: 20px;
      padding: 20px 0;
      .item{
        min-width: 300px;
        .icon{
          border-radius: 100px;
          border: 8px solid #e5f1ff;
          background: #d3e7ff;
        }
        .text{
          .descr{
            font-size: 12px !important;
            line-height:16px !important;
          }
        }
      }
    }
  }

`;

export default BannerWrapper;
