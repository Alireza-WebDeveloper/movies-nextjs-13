import { CircularProgress, Stack } from '@mui/material';
const loading = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="secondary" size="3rem" />
    </Stack>
  );
};

export default loading;
