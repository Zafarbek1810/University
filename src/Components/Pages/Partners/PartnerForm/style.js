import { styled } from "styled-components";

const PartnerFormWrapper = styled.div`
  background: #007aff;
  padding: 48px 0;

  h5.title {
    color: #fff;
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 12px;
  }

  p {
    color: #fff;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  input {
    border-color: #d0d5dd !important;
    &:focus {
      outline: none !important;
      border-color: #619dff !important;
      box-shadow: red !important;
      /* box-shadow: 0 0 1px 1px red, 0 0 1px 2px rgba(255, 255, 255, 0.9); */
    }
  }

  .label {
    width: 30%;
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

  .label2,
  .label3 {
    width: 30%;
    display: flex;
    align-items: center;
    input {
      padding: 14px;
      background: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 10px;
      color: #000;
      width: 100%;
    }
  }

  .label2 {
    width: 30%;
  }
  .label3 {
    width: 100%;
  }

  .submit-btn {
    margin-left: auto;
    color: #007aff;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 10px;
    background: #fff;
    padding: 16px 33px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    form {
      gap: 12px;
    }
    .label {
      width: 100%;
    }

    .label2,
    .label3 {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding: 24px 0;
    h5.title {
      font-size: 20px;
      line-height: 28px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
    form {
      gap: 12px;
    }
    .label {
      width: 100%;
    }

    .submit-btn{
      width: 100%;
    }
  }

`;

export default PartnerFormWrapper;
