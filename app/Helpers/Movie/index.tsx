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

export { asyncGetAllMovies };
