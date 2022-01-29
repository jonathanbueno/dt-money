import styled from 'styled-components';
import { darken, transparentize } from 'polished';

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

export const TransactionTypeContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  red: '#E62E4D',
  green: '#33cc95',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 200ms, border-color 200ms;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
