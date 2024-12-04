import styled from '@emotion/styled';

const InputBoxStyled = styled.div``;

const InputLabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 15px;

  font-size: 18px;
  color: var(--accent-color);

  border: none;
  border-radius: var(--border-radius);

  transition: outline-color var(--transition-duration) var(--timing-function),
    color var(--transition-duration) var(--timing-function),
    background-color var(--transition-duration) var(--timing-function),
    border-color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus {
    outline: 2px solid var(--primary-text-color);
    outline-offset: 3px;
  }

  &:disabled {
    color: var(--primary-text-color);
    background-color: var(--bg-disabled-color);
    border-color: var(--border-disabled-color);

    &:hover {
      outline: none;
    }
  }
`;

export { InputStyled, InputBoxStyled, InputLabelStyled };
