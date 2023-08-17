import { styled } from "styled-components";

const StudentWrapper = styled.div`
  .header {
    .navs {
      p {
        color: #000 !important;
      }
    }
  }
  .main {
    padding-top: 100px;
    padding-bottom: 72px;
    display: flex;
    gap: 40px;

    .tabs {
      width: 23%;
      display: flex;
      flex-direction: column;
      align-items: start;

      button {
        border: none;
        background: none;
        outline: none;
        padding: 16px;
        color: #121926;
        text-align: center;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        border-bottom: 1px solid #d0d5dd;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        svg {
          margin-left: 10px;
        }

        &.active {
          color: #007aff;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;

          svg {
            path {
              stroke: #007aff;
            }
          }
        }
      }

      button:last-child {
        border-bottom: none;
      }
    }

    .component {
      width: 77%;
    }
  }
  .btn{
    display: none;
  }

  //drawer style in global style
    
  @media (max-width: 576px) {

    .main{
      display: flex;
      flex-direction: column;

      .btn{
        display: flex;
        align-items: center;
        justify-content: end;
        border: none;
        background: none;
        color: #111;
        cursor: pointer;
        font-size: 20px;

        svg {
          width: 20px;
        }
      }

      .component{
        width: 100%;
      }

      .tabs{
        display: none;
      }
    }
  }

`;

export default StudentWrapper;
