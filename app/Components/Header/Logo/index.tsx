'use client';
import { LoadImagePartial } from '@/app/Models/Image';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
const myLoader = ({ src, width, quality }: LoadImagePartial) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Logo = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
      }}
    >
      <Link href="/">
        <Typography
          variant="h6"
          component="h1"
          fontWeight={'bold'}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          moives
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
