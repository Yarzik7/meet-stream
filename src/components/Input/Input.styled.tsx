import styled from '@emotion/styled';

const InputBoxStyled = styled.div`
  position: relative;
`;

const InputLabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 15px;
  padding-right: ${({ type }) => (type === 'password' ? '40px' : '15px')};

  font-size: 18px;
  color: var(--accent-color);

  border: none;
  border-radius: var(--border-radius);
  outline-color: transparent;
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

const InputButtonStyled = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;

  color: var(--accent-color);

  border: none;
  border-radius: var(--border-radius);
  background-color: var(--primary-text-color);

  outline-color: transparent;
  transition: outline-color var(--transition-duration) var(--timing-function),
    color var(--transition-duration) var(--timing-function),
    background-color var(--transition-duration) var(--timing-function),
    border-color var(--transition-duration) var(--timing-function);
  cursor: pointer;

  &:focus {
    outline: 2px solid var(--secondary-accent-color);
  }

  &:disabled {
    cursor: default;
    color: var(--primary-text-color);
    background-color: var(--bg-disabled-color);
  }
`;

export { InputStyled, InputBoxStyled, InputLabelStyled, InputButtonStyled };
