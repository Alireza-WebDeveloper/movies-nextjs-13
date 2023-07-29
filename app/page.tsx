import GHome from './Components/Pages/GHome';
import { asyncGetAllMovies, asyncGetMovieByType } from './Helpers/Movie';

export const revalidate = false;
export const dynamic = 'force-dynamic';

interface PageProps {
  params: {};
  searchParams: { type: string };
}

const Page = async (props: PageProps) => {
  const type = props.searchParams.type;
  if (type) {
    try {
      const movies = await asyncGetMovieByType(props.searchParams.type);
      return <GHome dataOfMovies={movies} />;
    } catch (error: any) {
      throw new Error(error.message);
    }
  } else {
    try {
      const movies = await asyncGetAllMovies();
      return <GHome dataOfMovies={movies} />;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
};

export default Page;
