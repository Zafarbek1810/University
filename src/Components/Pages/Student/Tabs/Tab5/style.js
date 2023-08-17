import { styled } from "styled-components";

const Tab5Wrapper = styled.div`
  .wrap {
    .selects{
      display: none;
    }
    .top_btns {
      display: flex;
      flex-wrap: wrap;
      gap: 13px;
      button {
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 122, 255, 0.13);
        color: #007aff;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        border: none;
        cursor: pointer;
      }
      .active {
        background: #007aff;
        color: #fff;
      }
    }

    .title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
      margin: 44px 0;
    }

    .component {
        width: 100%;
    }
  }


  @media (max-width: 767px) {
    .wrap {
      .selects{
        display: block;
      }
      .top_btns{
        flex-direction: column;
        gap: 10px;

        button {
          display: none;
        }
          
      }
      .title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 22px;
      }
    }
  }
`;

export { Tab5Wrapper };
