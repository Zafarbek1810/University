import { styled } from "styled-components";

const PartnersWrapper = styled.div`
  padding: 72px 0;
  .wrapper {
    align-items: center;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .title {
    color: #121926;
    font-family: SF Pro Display;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    margin-bottom: 48px;
  }

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(
        calc((-320px * 12) + ${(props) => props.animateWidth}px)
      );
    }

    100% {
      transform: translateX(0);
    }
  }

  // Styling
  .slider {
    background: white;
    height: 150px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;

    .slide-track {
      animation: scroll 90s linear infinite;
      display: flex;
      width: calc(320px * 12);
    }

    .slide {
      height: 150px;
      width: 320px;
      /* background-color: #f8f8f8; */
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        filter: grayscale(1);
        transition: filter 0.4s ease, opacity 0.3s ease;
        opacity: 0.6;
        height: 90px;
        width: auto;
        border-radius: 10px;
        border: 1px solid #d0d5dd;
        background-color: #fff;
        padding: 10px 10px;
        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 32px;
      line-height: 40px;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export { PartnersWrapper };
