'use client';
import { MovieTypeList } from '@/app/Models/Movie';
import { Grid } from '@mui/material';
import MovieItem from '../MovieItem';
interface MovieListProps {
  dataOfMovies: MovieTypeList;
}
const MovieList: React.FC<MovieListProps> = ({ dataOfMovies }) => {
  const renderMovieItems = () => {
    return dataOfMovies.map((movie) => {
      return (
        <Grid item lg={4} md={6} xs={12} key={movie.id}>
          <MovieItem movie={movie} />
        </Grid>
      );
    });
  };
  return (
    <Grid container spacing={2}>
      {renderMovieItems()}
    </Grid>
  );
};

export default MovieList;
