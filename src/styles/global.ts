import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E62E4D;
    --green: #33cc95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
    --input-bg: #e7e9ee;
    --input-border: #d7d7d7;

    --shape: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 800px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    background-color: var(--background);
    border-radius: 0.24rem;

    padding: 3rem;
    position: relative;

    width: 100%;
    max-width: 576px;

    @media (max-width: 800px) {
      max-width: 90%;
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
