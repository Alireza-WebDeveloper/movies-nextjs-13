'use client';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import Link from 'next/link';
import Navlinks from './Navlinks';
import Logo from './Logo';

const Header = () => {
  return (
    <AppBar color="inherit" variant="elevation">
      <Toolbar>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            p: 1,
            alignItems: 'center',
          }}
        >
          <Logo />
          <Navlinks />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
