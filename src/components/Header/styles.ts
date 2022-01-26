import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: var(--blue);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    background-color: var(--blue-light);
    color: var(--shape);
    border: none;
    border-radius: 0.25rem;

    font-size: 1rem;
    height: 3rem;
    padding: 0 1rem;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
