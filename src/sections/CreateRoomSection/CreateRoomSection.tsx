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
      <Typography
        variant="h1"
        align="center"
        sx={{ fontSize: "28px", color: "var(--accent-color)" }}
      >
        Create room
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <CustomButton onClick={onCreateNewRoom}>New room</CustomButton>
        <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Input label="Room code" />
          <CustomButton onClick={onConnect}>Connect</CustomButton>
        </Box>
      </Box>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
