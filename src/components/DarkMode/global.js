/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .dark-mode {
    align-items: center;
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
.btn-box {
    
    &__btn:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    &__btn:first-child {
        margin-top: 1.5rem;
    }
}

.active * {
    font-weight: bold;
}

`;
