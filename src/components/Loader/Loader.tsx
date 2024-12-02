import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return <CircularProgress sx={{ color: 'var(--primary-text-color)' }} />;
};

export default Loader;
