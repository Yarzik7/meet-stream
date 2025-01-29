'use client';
import React from 'react';
import { Box } from '@mui/material';
import { VideoStyled } from './VideoBox.styled';

const VideoBox = () => {
  return (
    <Box
      sx={{
        height: '250px',
        backgroundColor: 'var(--primary-black-color)',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
      }}
    >
      <VideoStyled />
    </Box>
  );
};

export default VideoBox;
