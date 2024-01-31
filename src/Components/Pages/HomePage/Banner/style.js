import { styled } from "styled-components";

const BannerWrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 4.25%,
      rgba(0, 0, 0, 0) 52.08%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.83) 0%,
      rgba(0, 0, 0, 0.81) 6.71%,
      rgba(0, 0, 0, 0.56) 43.66%,
      rgba(0, 0, 0, 0) 73.57%
    ),
    url("images/banner.jpg") no-repeat center center / cover;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;

  .title {
    width: 590px;
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px;
    color: #fff;
    margin-bottom: 24px;
  }

  .description {
    width: 690px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color: #fff;
    margin-bottom: 24px;
  }
  .myBtn {
    border: none;
    border-radius: 10px;
    background: #007aff;
    color: #fff;
    font-size: 16px;
    padding: 16px 33px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    height: 100vh;
    .title {
      width: 100%;
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 16px;
    }

    .description {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    .title {
      width: 100%;
      font-size: 40px;
      line-height: 48px;

      margin-bottom: 16px;
    }

    .description {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 455px) {
    background-position: right top;
    height: 100vh;
    .title {
      width: 100%;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 16px;
    }

    .description {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 320px) {
    height: calc(100vh - 59px);
    .title {
      width: 100%;
      font-size: 24px;
      line-height: 48px;
      margin-bottom: 16px;
    }

    .description {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }
`;

export default BannerWrapper;
