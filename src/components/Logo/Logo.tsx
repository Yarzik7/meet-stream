import React from 'react';
import { Typography } from '@mui/material';
import { LogoLinkStyled } from './Logo.styles';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Logo = () => {
  return (
    <LogoLinkStyled href="/">
      <MeetingRoomIcon sx={{ width: '28px', height: '28px' }} />
      <Typography variant="h6" component="span" fontSize={24}>
        MeetStream
      </Typography>
    </LogoLinkStyled>
  );
};

export default Logo;
