'use client'; // Error components must be Client Components

import { Stack, Typography, Button } from '@mui/material';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset(): void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1">
        {error.message}
      </Typography>
      <Button
        variant="contained"
        color="info"
        size="large"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </Stack>
  );
}
