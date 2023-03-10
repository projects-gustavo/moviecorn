import styled from "styled-components";

export const Container = styled.div`
  animation: fade 0.4s ease;
  margin-bottom: 0;
  display: flex;

  @keyframes fade {
    from {
      opacity: 0.4;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    color: #fff;
    max-width: 100%;
    font-size: 3rem;
    margin-bottom: 5px;

    @media (max-width: 960px) {
      font-size: 2rem;
      padding: 0.5rem;
    }
  }

  .serie-intro {
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

    @media (max-width: 960px) {
      top: 12vh;
      height: 80%;
    }
  }

  .serie-backdrop {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: 35% 35%;
    filter: brightness(0.4);

    @media (max-width: 960px) {
      height: 300px;
    }
  }

  .serie {
    display: flex;
    justify-content: center;
    top: 350px;
    left: 10%;
    position: absolute;
    z-index: -1;

    @media (max-width: 960px) {
      top: 200px;
      left: 0px;
    }
  }

  img {
    width: 400px;
    user-select: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 960px) {
      width: 200px;
      left: 100px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 960px) {
      align-items: center;
      text-align: center;
      margin-left: 0rem;
      padding-top: 13.5rem;
      padding-bottom: 1.5rem;
    }

    @media (min-width: 961px) {
      margin-left: 14rem;
      padding-top: 14.5rem;
      padding-bottom: 1rem;
    }

    @media (min-width: 1900px) {
      margin-left: 9rem;
      padding-top: 15rem;
      padding-bottom: 0;
    }
  }

  .primary-info {
    display: flex;
    gap: 1rem;

    .vote-style {
      display: flex;
      font-size: 1.5rem;
      gap: 0.3rem;
      color: #a9a9b2;
      text-align: center;
      align-items: center;
      margin-bottom: 0;
      font-weight: 500;

      @media (max-width: 960px) {
        font-size: 1rem;
      }
    }

    .divider {
      background-color: #fff;
      width: 1px;
      opacity: 0.6;
      height: 3vh;
      display: flex;
      text-align: center;
      align-items: center;
    }
  }

  .sinopse {
    max-width: 97%;
    font-size: 1rem;
    opacity: 0.7;
    border-radius: 5px;
    padding: 0.5rem;

    @media (max-width: 960px) {
      width: 80%;
    }
  }

  .info-genres {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 960px) {
      gap: 0.5rem;
      font-size: 11px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }

    span {
      display: flex;
      text-align: center;
      align-items: center;
      background: #e50914;
      font-size: 100%;
      font-weight: 600;
      border-radius: 0.5rem;
      color: #fff;
      padding: 0.5rem 1rem;
    }
  }

  button {
    background: none;
    border: 2px solid #e50914;
    color: #e50914;
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
    user-select: none;

    &:hover {
      background: #e50914;
      color: #000;
    }
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .release-date {
    display: flex;
    color: #a9a9b2;
    font-size: 1.5rem;
    gap: 0.3rem;
    text-align: center;
    align-items: center;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-bottom: 0rem;

    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }

  .language {
    background: #e50914;
    font-size: 100%;
    font-weight: 600;
    border-radius: 0.5rem;
    color: #000;
    padding: 0.25rem 0.5rem;
  }

  .info-language {
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    .serie {
      flex-direction: column;
    }

    .serie-image {
      display: flex;
    }

    .details {
      max-width: 100%;
    }

    .info {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const Header = styled.div`
  margin-left: 20rem;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    top: 0;
    margin-left: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    background: #080b22;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.3rem 0.6rem;
    transition: all 0.3s;
    color: #fff;

    .icon-arrow {
      color: #fff;
    }

    &:hover {
      background-color: #060813;
      color: #fff;
    }
  }
`;
