import { styled } from "styled-components";

const AdvantagesWrapper = styled.div`
  padding: 72px 0;
  h3.title {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 2rem;
  }

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
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #007aff;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 20px;
          font-weight: 500;
          line-height: normal;
        }
      }

      .text {
        .descr {
          color: #121926;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 20px;
          font-weight: 500;
          line-height: normal;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 48px 0;
    h3.title {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 1rem;
    }

    .cards {
      .item {
        width: 50%;
        padding: 24px 20px;
        .icon {
          border-radius: 100px;
          span {
            font-size: 20px;
          }
        }

        .text {
          .descr {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 24px 0;
    h3.title {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 0.5rem;
    }

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

export default AdvantagesWrapper;
