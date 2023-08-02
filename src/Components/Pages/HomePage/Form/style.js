import { styled } from "styled-components";

const FormWrapper = styled.div`
  padding: 48px 75px;
  background: #f9fafb;
  border-radius: 16px;

  .title {
    font-family: SF Pro Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    color: #121926;
    margin-bottom: 12px;
  }

  .descr {
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: #475467;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    gap: 22px;
    justify-content: space-between;
  }
  input {
    border-color: #D0D5DD !important;
    &:focus {
      outline: none !important;
      border-color: #619DFF !important;
      box-shadow: red !important;
      /* box-shadow: 0 0 1px 1px red, 0 0 1px 2px rgba(255, 255, 255, 0.9); */
    }
  }

  .label {
    width: 25%;
    display: flex;
    align-items: center;
    position: relative;
    input {
      padding: 14px 14px 14px 40px;
      background: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 10px;
      color: #000;
      width: 100%;
    }
    svg {
      position: absolute;
      left: 5px;
    }
  }

  .myBtn {
    min-width: 25%;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    .title {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .descr {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    form {
      flex-direction: column;
      gap: 16px;
      .label {
        width: 100%;
        input {
          padding: 14px 14px 14px 40px;
          background: #fff;
          border: 1px solid #d0d5dd;
          border-radius: 10px;
          color: #000;
          width: 100%;
        }
        svg {
          position: absolute;
          left: 5px;
        }
      }
    }
  }
`;

export default FormWrapper;
