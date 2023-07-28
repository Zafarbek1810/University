import { styled } from "styled-components";

const FooterWrapper = styled.div`
  padding: 24px 0;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      gap: 20px;

      a {
        color: #121926;
        text-align: center;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
    }

    .social {
      display: flex;
      gap: 20px;
      align-items: center;

      a {
        transform: translateY(-10px);
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      gap: 20px;

      .links {
        flex-direction: column;
        gap: 20px;
      }

      .social {
        gap: 20px;
        align-items: flex-start;

        a {
          transform: translateY(0px);
        }
      }
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      .links {
        flex-direction: column;
        gap: 20px;
      }

      .social {
        gap: 20px;
        align-items: flex-start;
        a {
          transform: translateY(0px);
        }
      }
    }
  }
`;

export default FooterWrapper;
