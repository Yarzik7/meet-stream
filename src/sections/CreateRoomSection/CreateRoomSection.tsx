"use client";
import React from "react";
import SectionWithContainer from "@/components/Section/SectionWithContainer/SectionWithContainer";
import { Typography, Button, Input } from "@mui/material";

const CreateRoomSection = () => {
  const onCreateNewRoom = () => {
    console.log("Create new room");
  };

  return (
    <SectionWithContainer>
      <Typography variant="h2" align="center">
        Create room
      </Typography>
      <div>
        <Button variant="contained" color="primary" onClick={onCreateNewRoom}>
          Create new room
        </Button>
        <Input placeholder="Enter room code" />
        <Button variant="text" color="success">
          Connect
        </Button>
      </div>
    </SectionWithContainer>
  );
};

export default CreateRoomSection;
