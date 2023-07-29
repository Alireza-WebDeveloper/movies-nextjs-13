import { LoadImagePartial } from '@/app/Models/Image';
import { MovieTypeObj } from '@/app/Models/Movie';
import { Card, Box, CardContent, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const createLoadImage = ({ src, width, quality }: LoadImagePartial) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

interface MovieItemProps {
  movie: MovieTypeObj;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Card>
      <Box
        component="section"
        sx={{
          height: {
            md: '45vh',
            sm: '55vh',
            xs: '50vh',
          },
          position: 'relative',
        }}
      >
        <Image
          loader={createLoadImage}
          src={movie.image}
          alt={'image'}
          fill
          style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
          priority
          sizes="(max-width: 1200px) 100vw"
        />
      </Box>
      <CardContent>
        <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h5" component="h1" textAlign="center">
            {movie.name}
          </Typography>
          <Typography
            sx={{ color: (theme) => theme.palette.warning.main }}
            variant="body2"
            component="p"
          >
            type : {movie.type}
          </Typography>
          <Typography variant="body1" component="p">
            {movie.description.slice(0, 50)}...
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
