import { MovieTypeList } from '@/app/Models/Movie';
import axios from 'axios';

const asyncGetAllMovies = async () => {
  try {
    const response = await axios.get<MovieTypeList>(
      'http://localhost:5007/movies'
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncGetMovieByType = async (type: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5007/movies?type=${type}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetAllMovies, asyncGetMovieByType };
