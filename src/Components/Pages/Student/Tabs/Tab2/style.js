import { styled } from "styled-components";

const Tab2Wrapper = styled.div`
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-bottom: 2rem;

    .title {
      color: #121926;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 48px;
      font-weight: 600;
      line-height: 60px;
    }

    .ant-select-selector {
      border-radius: 10px;
      background: #f9fafb;
      border: none;
      min-height: 50px;
      min-width: 200px;
    }

    .ant-select-dropdown {
      min-height: 50px;
      min-width: 250px !important;
      width: 250px !important;
    }


    .ant-select-selection-item {
      color: #000;
      text-align: center;
      font-family: SF Pro Display;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-select-arrow {
      position: absolute;
      right: -70px !important;

      svg {
        width: 18px;
        fill: #000;
      }
    }
  }

  .bottom {
    .tabs-raspisaniya {
      display: flex !important;
      .tab {
        border-radius: 100px;
        background: #f9fafb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px;
        width: 90%;

        button {
          border-radius: 100px;
          background: transparent;
          border: none;
          color: #202327;
          text-align: center;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          padding: 6px 10px;
          cursor: pointer;
          width: 15%;
        }

        .active {
          background: #fff;
        }
      }

      .download{
        width: 10%;
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }


  @media (max-width: 768px) {
    .top {
      flex-direction: column;
      gap: 16px;

      .title {
        font-size: 24px;
        line-height: 32px;
      }

      .ant-select-selector {
        min-height: 40px;

        .ant-select-selection-item {
          font-size: 16px;
          line-height: 24px;
         
        }

        .ant-select-arrow {
          right: -50px !important;

        }
      }
    }

    .bottom {
      .tabs-raspisaniya {
        .tab{
          width: 100%;
          button{
            width: 100%;
            font-size: 14px;
            line-height: 22px;
            padding: 4px 8px;
          }

          button:last-child{
            width: 100%;
          }
        }


        }
      }
        

            
  }
`;

export { Tab2Wrapper };
