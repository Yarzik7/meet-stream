import React from 'react';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import { Typography } from '@mui/material';
import VideoBox from '@/components/VideoBox/VideoBox';

const ConnectToRoomSection = () => {
  return (
    <SectionWithContainer>
      <DecoratorBox sx={{ marginBottom: '20px' }}>
        <Typography variant="h1" align="center" sx={{ fontSize: '28px' }}>
          Connect to room
        </Typography>
      </DecoratorBox>
      <VideoBox />
    </SectionWithContainer>
  );
};

export default ConnectToRoomSection;
