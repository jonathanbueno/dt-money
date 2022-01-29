import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    font-size: 1rem;
    font-weight: 400;

    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    background-color: var(--green);
    border: 0;
    border-radius: 0.25rem;

    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;

    margin-top: 2rem;
    padding: 0 1.5rem;

    height: 4rem;
    width: 100%;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
