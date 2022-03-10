import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--secondary-color);
  padding: 2.5rem;
  width: 30rem;
  border-radius: 0 7rem;
  border-left: 9px solid var(--primary-color);

  .picture {
    margin-right: 1.1rem;

    img {
      width: 3.8rem;
      height: 3.8rem;
      object-fit: cover;
      border-radius: 100vw;
      border: 2px solid var(--primary-color);
    }
  }

  .name {
    margin-bottom: 0.2rem;
  }

  .title {
    color: var(--primary-color);
  }
`