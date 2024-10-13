"use client";
import React from "react";
import SectionWithContainer from "@/components/Section/SectionWithContainer/SectionWithContainer";
import { Typography, Button, Box } from "@mui/material";
import Input from "@/components/Input/Input";
import CustomButton from "@/components/CustomButton/CustomButton";

const CreateRoomSection = () => {
  const onCreateNewRoom = (): void => {
    console.log("Create new room");
  };

  return (
    <SectionWithContainer>
      <Typography variant="h2" align="center">
        Create room
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <CustomButton onClick={onCreateNewRoom}>New room</CustomButton>
        <Input label="Room code" />
        <Button variant="text" color="success">
          Connect
        </Button>
      </Box>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
