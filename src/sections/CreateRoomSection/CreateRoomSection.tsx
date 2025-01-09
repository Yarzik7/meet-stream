'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Box } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { onCreateRoom } from '@/utils/api/onCreateRoom';
import type { IRoom } from '@/types/Room.types';
import type { IError } from '@/types/Error.types';
import SectionWithContainer from '@/components/Section/SectionWithContainer/SectionWithContainer';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import CustomButton from '@/components/CustomButton/CustomButton';
import Input from '@/components/Input/Input';

const CreateRoomSection = () => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const [isCreatingRoom, setIsCreatingRoom] = useState<boolean>(false);
  const [roomId, setRoomId] = useState<string>('');

  const onCreateNewRoom = async (): Promise<void> => {
    // return alert('Sorry, this feature is still under development :(');
    setIsCreatingRoom(true);
    const createdRoomResponse: IRoom | IError = await onCreateRoom({ owner: user._id });
    setIsCreatingRoom(false);

    if ('error' in createdRoomResponse && createdRoomResponse.error) {
      return alert(createdRoomResponse.message);
    }

    if (!('error' in createdRoomResponse)) {
      setRoomId(createdRoomResponse._id);
    }

    console.log(createdRoomResponse);
    alert('Room was created!');
  };

  const onConnect = (): void => {
    router.replace(`/rooms/${roomId}`);
    // alert('Sorry, this feature is still under development :(');
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
