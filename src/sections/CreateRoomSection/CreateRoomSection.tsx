'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import CustomButton from '@/components/CustomButton/CustomButton';
import Input from '@/components/Input/Input';

const CreateRoomSection = () => {
  const onCreateNewRoom = (): void => {
    console.log('Create new room');
  };

  const onConnect = (): void => {
    console.log('Connect');
  };

  return (
    <SectionWithContainer>
      <DecoratorBox sx={{ marginBottom: '20px' }}>
        <Typography variant="h1" align="center" sx={{ fontSize: '28px' }}>
          Create room
        </Typography>
      </DecoratorBox>

      <DecoratorBox>
        <CustomButton onClick={onCreateNewRoom}>Create room</CustomButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <Input label="Room code" name="room_code" />
          <CustomButton onClick={onConnect}>Connect</CustomButton>
        </Box>
      </DecoratorBox>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
