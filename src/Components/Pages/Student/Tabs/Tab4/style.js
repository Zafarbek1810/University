import { styled } from "styled-components";

const Tab4Wrapper = styled.div`
  .title {
    color: #121926;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 44px;
  }

  .btns {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 767px){
    .title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 22px;

    }

    .btns {
        flex-direction: column;
        gap: 10px;
    }
  }
`;

export { Tab4Wrapper };
