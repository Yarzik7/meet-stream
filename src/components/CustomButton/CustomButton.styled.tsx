import Link from 'next/link';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const BaseButtonStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: var(--padding-button);

  font-size: 14px;
  color: var(--primary-text-color);
  text-transform: capitalize;
  background-color: var(--accent-color);
  border: 2px solid var(--primary-text-color);
  border-radius: var(--border-radius);
  transition: background-color var(--transition-duration) var(--timing-function);

  &:hover {
    background-color: var(--secondary-accent-color);
  }
`;

const LinkAsButtonStyled = styled(Link)`
  ${BaseButtonStyles}
  text-decoration: none;
`;

const ButtonStyled = styled(Button)`
  ${BaseButtonStyles}
`;

export { LinkAsButtonStyled, ButtonStyled };
