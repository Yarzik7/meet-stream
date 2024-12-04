import styled from '@emotion/styled';
import Link from 'next/link';

const AuthOfferTextStyled = styled.p`
  margin-top: 20px;
  text-align: center;
`;

const AuthLinkStyled = styled(Link)`
  padding: 3px;

  text-transform: capitalize;
  color: var(--primary-text-color);

  outline-width: 2px;
  outline-style: solid;
  outline-color: transparent;

  border-radius: var(--border-radius);
  transition: background-color var(--transition-duration) var(--timing-function),
    outline-color var(--transition-duration) var(--timing-function);

  &:hover {
    background-color: var(--secondary-accent-color);
  }

  &:focus {
    background-color: var(--secondary-accent-color);
    outline-color: var(--primary-text-color);
  }
`;

export { AuthOfferTextStyled, AuthLinkStyled };
