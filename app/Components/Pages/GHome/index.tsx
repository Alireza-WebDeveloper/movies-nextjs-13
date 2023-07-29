'use client';

import { MovieTypeList } from '@/app/Models/Movie';
import { Container, Grid } from '@mui/material';
import MovieList from '../../Movie/MovieList';
import SearchBar from '../../Searchbar';

interface GHomeProps {
  dataOfMovies: MovieTypeList;
}

const GHome: React.FC<GHomeProps> = ({ dataOfMovies }) => {
  return (
    <Container>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <MovieList dataOfMovies={dataOfMovies} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GHome;
