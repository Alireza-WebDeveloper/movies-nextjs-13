import { Box, Button } from '@mui/material';
import Link from 'next/link';
import * as Icons from 'react-icons/md';
const Navlinks = () => {
  const styleLink = { textDecoration: 'none', color: 'inherit' };
  return (
    <Box
      component={'section'}
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
    >
      <Link href={'/'} style={styleLink}>
        <Button
          size="large"
          variant="text"
          color="inherit"
          endIcon={<Icons.MdHome />}
        >
          home
        </Button>
      </Link>
      <Link href={'/about'} style={styleLink}>
        <Button
          size="large"
          variant="text"
          color="inherit"
          endIcon={<Icons.MdHelp />}
        >
          about
        </Button>
      </Link>
    </Box>
  );
};

export default Navlinks;
