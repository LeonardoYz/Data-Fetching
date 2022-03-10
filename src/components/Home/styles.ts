import styled from "styled-components";

export const Container = styled.div`
  padding: calc(var(--header-height) + 6rem) 0;
  max-width: 1200px;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2.5rem;
  }
`