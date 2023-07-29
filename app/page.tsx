import GHome from './Components/Pages/GHome';
import { asyncGetAllMovies } from './Helpers/Movie';

export const revalidate = false;
export const dynamic = 'force-dynamic';

const Page = async () => {
  try {
    const movies = await asyncGetAllMovies();

    return <GHome dataOfMovies={movies} />;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default Page;
