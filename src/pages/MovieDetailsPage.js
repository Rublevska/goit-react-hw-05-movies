import { FetchMovieById } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieItem/MovieDetails';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getMovieByID() {
      try {
        setIsLoading(true);
        const MovieByID = await FetchMovieById(params.movieId);
        setMovie(MovieByID);
      } catch (error) {
        toast.error(`ERROR loading movie's details ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieByID();
  }, [params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movie && <MovieDetails movieDescribe={movie} />}
    </div>
  );
}
