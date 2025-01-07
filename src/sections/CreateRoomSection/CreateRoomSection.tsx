'use client';

import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { onCreateRoom } from '@/utils/api/onCreateRoom';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import CustomButton from '@/components/CustomButton/CustomButton';
import Input from '@/components/Input/Input';

const CreateRoomSection = () => {
  const { isLoggedIn, user } = useAuth();
  const [isCreatingRoom, setIsCreatingRoom] = useState<boolean>(false);

  const onCreateNewRoom = async (): Promise<void> => {
    return alert('Sorry, this feature is still under development :(');
    setIsCreatingRoom(true);
    const createdRoomResponse = await onCreateRoom({ owner: user._id });
    setIsCreatingRoom(false);
    console.log(createdRoomResponse);
    alert('Room was created!');
  };

  const onConnect = (): void => {
    alert('Sorry, this feature is still under development :(');
  };

  return (
    <SectionWithContainer>
      <DecoratorBox sx={{ marginBottom: '20px' }}>
        <Typography variant="h1" align="center" sx={{ fontSize: '28px' }}>
          Create room
        </Typography>
      </DecoratorBox>

      <DecoratorBox>
        {isLoggedIn && (
          <CustomButton disabled={isCreatingRoom} onClick={onCreateNewRoom}>
            Create room
          </CustomButton>
        )}
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
