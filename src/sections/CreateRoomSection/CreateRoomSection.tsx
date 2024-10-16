"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import SectionWithContainer from "@/components/Section/SectionWithContainer/SectionWithContainer";
import CustomButton from "@/components/CustomButton/CustomButton";
import Input from "@/components/Input/Input";

const CreateRoomSection = () => {
  const onCreateNewRoom = (): void => {
    console.log("Create new room");
  };

  const onConnect = (): void => {
    console.log("Connect");
  };

  return (
    <SectionWithContainer>
      <Typography variant="h2" align="center">
        Create room
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <CustomButton onClick={onCreateNewRoom}>New room</CustomButton>
        <Input label="Room code" />
        <CustomButton onClick={onConnect}>Connect</CustomButton>
      </Box>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
