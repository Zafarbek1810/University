import { styled } from "styled-components";

const EducationTypeWrapper = styled.div`
  padding: 72px 0 ;

  .title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    margin: 0;
  }

  .description {
    width: 645px;
    margin: auto;
    color: #475467;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 49px;
  }

  .ant-tabs-tab-btn {
    color: #475467;
    font-family: SF Pro Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  /* .ant-tabs-content-holder {
    padding: 10px 24px;
    border-radius: 16px;
    background: #f9fafb;
    display: flex;
    width: 590px;
    height: 368px;
    padding: 10px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  } */



  @media (max-width: 768px) {
    padding: 48px 0;
    .title {
      font-size: 40px;
      line-height: 48px;
    }

    .description {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }

    .ant-tabs-tab-btn{
      font-size: 16px;
      line-height: 24px;
      white-space: pre-wrap;
      text-align: center !important;
      
    }
    .ant-tabs-tab{
      padding: 0 10px;
      width: 200px !important;
    }
  }

  @media (max-width: 576x) {
    padding: 24px 0;
    .title {
      font-size: 32px;
      line-height: 40px;
    }

    .description {
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .ant-tabs-tab-btn{
      font-size: 14px;
      line-height: 20px;


    }
  }

  @media (max-width: 425px) {
    padding: 24px 0;
    .title {
      font-size: 24px;
      line-height: 32px;
    }

    .description {
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .ant-tabs-tab-btn{
      font-size: 14px;
      line-height: 20px;
      white-space: pre-wrap;
      text-align: center !important;

    }
    .ant-tabs-tab{
      padding: 0 10px;
      width: 150px !important;
    }
  }
  




  `;

const ItemWrapper=styled.div`
.item {
  padding: 10px 24px;
  border-radius: 16px;
  background: #f9fafb;
  display: flex;
  height: 368px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .title {
    color: #121926;
    text-align: center;

    font-family: SF Pro Display;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    margin: 0;
  }

  .descr {
    color: #475467;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .item {
    height: 100%;
    .title {
      font-size: 24px;
      line-height: 32px;
    }
    .descr {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

@media (max-width: 425px) {
  .item {
    height: 100%;
    .title {
      font-size: 20px;
      line-height: 28px;
    }
    .descr {
      font-size: 14px;
      line-height: 20px;
    }
  }
}


`

export {EducationTypeWrapper, ItemWrapper} ;
