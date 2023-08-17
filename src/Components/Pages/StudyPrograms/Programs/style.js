import { styled } from "styled-components";

const ProgramsWrapper = styled.div`
  padding: 72px 0;

  .top {
    .filterBtn {
      display: none;
    }
    .title {
      color: #121926;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      margin-bottom: 42px;
    }
  }

  .wrapper {
    display: flex;
    gap: 20px;
  }

  .category {
    width: 25%;
    .box {
      border-radius: 16px;
      border: 1px solid #d0d5dd;
      padding: 16px;
      margin-bottom: 16px;

      &__title {
        color: #121926;
        font-family: SF Pro Display;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
      }

      &__list {
        padding: 0;
      }

      &__item,
      &__item-switch {
        list-style: none;
        display: flex;
        gap: 10px;
        color: #121926;
        text-align: left;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 16px;
      }

      &__item-switch {
        justify-content: space-between;
      }
    }
  }

  .main {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    .card {
      border-radius: 16px 16px 0 0;
      width: 30%;
      margin-bottom: 24px;

      &__img {
        img {
          width: 100%;
        }
      }

      &__content {
        padding: 16px;
        border-radius: 0px 0px 16px 16px;
        background: #f9fafb;

        span {
          color: #007aff;
          font-family: SF Pro Display;
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
          padding: 6px 10px;
          border-radius: 10px;
          background: rgba(0, 122, 255, 0.13);
        }

        h6 {
          margin: 10px 0 0 0;
          color: #121926;
          font-family: SF Pro Display;
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .title {
      font-size: 36px;
      line-height: 48px;
    }

    .main {
      width: 100%;
      .card {
        width: 48%;

        &__img {
          img {
            width: 100%;
          }
        }

        &__content {
          padding: 16px;
          border-radius: 0px 0px 16px 16px;
          background: #f9fafb;

          span {
            color: #007aff;
            font-family: SF Pro Display;
            font-size: 12px;
            font-weight: 400;
            line-height: normal;
            padding: 6px 10px;
            border-radius: 10px;
            background: rgba(0, 122, 255, 0.13);
          }

          h6 {
            margin: 10px 0 0 0;
            color: #121926;
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
    padding: 72px 0 72px;
    .title {
      font-size: 24px;
      line-height: 32px;
    }

    .wrapper {
      justify-content: space-between;
    }

    .category {
      width: 40%;
      .box {
        &__title {
          font-size: 18px;
          line-height: 24px;
        }

        &__item,
        &__item-switch {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    .main {
      width: 60%;
      .card {
        width: 100%;
      }
    }
  }

  @media (max-width: 540px) {
    padding: 72px 0 72px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      .filterBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        outline: none;
        color: #111;
        cursor: pointer;
        font-size: 20px;

        svg {
          width: 20px;
        }
      }

      .title {
        font-size: 24px;
        line-height: 32px;
      }
    }

    .category {
      display: none;
    }

    .main {
      width: 100%;
    }
  }
`;

export { ProgramsWrapper };
