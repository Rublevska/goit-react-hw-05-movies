import { fetchTrendMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Movies } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MainTitle } from './HomePages.styled';

export default function MoviesPage() {
  const [moviesList, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await fetchTrendMovies();

        if (fetchedMovies.total_results === 0) {
          toast.error(`There is no movies to load`);
          return;
        }

        setMovies([...fetchedMovies.results]);
      } catch (error) {
        toast.error(`ERROR loading movies ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {moviesList.length > 0 && (
        <div>
          <MainTitle>Trending today</MainTitle>
          <Movies moviesList={moviesList} />
        </div>
      )}
    </div>
  );
}
