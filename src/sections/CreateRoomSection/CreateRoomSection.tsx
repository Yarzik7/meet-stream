"use client";
import React from "react";
import SectionWithContainer from "@/components/Section/SectionWithContainer/SectionWithContainer";
import { Typography, Button, Input, Box } from "@mui/material";
import CustomButton from "@/components/CustomButton/CustomButton";

const CreateRoomSection = () => {
  // const onCreateNewRoom = (): void => {
  //   console.log("Create new room");
  // };

  return (
    <SectionWithContainer>
      <Typography variant="h2" align="center">
        Create room
      </Typography>
      <Box sx={{ display: "flex", gap: 10 }}>
        <CustomButton>New room</CustomButton>
        <Input placeholder="Enter room code" />
        <Button variant="text" color="success">
          Connect
        </Button>
      </Box>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
