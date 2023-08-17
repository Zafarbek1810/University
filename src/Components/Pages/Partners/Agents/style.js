import { styled } from "styled-components";

const AgentsWrapper = styled.div`
  padding-top: 72px;

  .title {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 48px;
  }

  .bottom {
    display: flex;
    gap: 20px;
    .left {
      width: 50%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .right {
      width: 50%;

      p {
        color: #000;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 48px;

    .title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 24px;
    }

    .bottom {
      flex-direction: column;
      gap: 0;
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
        margin-top: 24px;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 24px;

    .title {
      font-size: 24px;
      line-height: 32px;

      margin-bottom: 16px;
    }

    .bottom {
      .left {
        img {
          width: 100%;
          height: auto;
        }
      }

      .right {
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }

  @media (max-width: 340px) {
    padding: 24px 16px;
    .bottom {
      .right {
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`;

export default AgentsWrapper;
