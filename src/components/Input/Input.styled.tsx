import styled from "@emotion/styled";

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

  transition: outline-color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus {
    outline: 2px solid var(--primary-text-color);
    outline-offset: 3px;
  }
`;

export { InputStyled, InputBoxStyled, InputLabelStyled };
