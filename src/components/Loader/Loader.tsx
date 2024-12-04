import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

const Loader = (props: CircularProgressProps) => {
  return <CircularProgress title="Loader" sx={{ color: 'var(--primary-text-color)' }} {...props} />;
};

export default Loader;
