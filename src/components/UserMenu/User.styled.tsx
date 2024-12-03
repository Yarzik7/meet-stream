import styled from '@emotion/styled';

const UserMenuBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UsernameStyled = styled.p`
  margin-bottom: 3px;
  font-weight: 700;
`;

const UserEmailStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const UserAvatarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  border: 2px solid var(--primary-text-color);
  border-radius: 50%;
`;

export { UserMenuBoxStyled, UsernameStyled, UserEmailStyled, UserAvatarStyled };
