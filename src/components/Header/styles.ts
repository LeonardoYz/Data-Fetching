import styled from "styled-components";
import { darken } from "polished"

export const Container = styled.header`
  position: fixed;
  z-index: var(z-index-header);
  width: 100%;
  background-color: var(--dark-color);
`

export const Content = styled.div`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  .header {
    &__logo {
      img { 
        width: 3.3rem;
      }
    }

    &__form {
      position: relative;
      display: flex;
      align-items: center;
    }

    &__input {
      font-weight: 500;
      outline: none;
      border-radius: 100vw;
      background-color: transparent;
      color: var(--neutral-color);
      border: 2px solid var(--neutral-color);
      padding: 0.6rem 1rem 0.6rem 3rem;
      transition: border-color 280ms ease-out;

      &:focus {
        border-color: var(--primary-color);

        ~ .header__icon {
          color: var(--primary-color)
        }
      }

      &::placeholder {
        color: ${darken(0.2, "hsl(0, 0%, 100%)")};
      }
    }

    &__icon {
      position: absolute;
      left: 1.063rem;
      font-size: 1.1rem;
      color: var(--neutral-color);
      transition: color 280ms ease-in;
    }
  }
`