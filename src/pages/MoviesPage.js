import { FetchMovies } from 'api';
import { Button } from 'components/LoadMoreBtn/Button';
import { Loader } from 'components/Loader/Loader';
import { Movies } from 'components/MoviesList/MoviesList';
import { Search } from 'components/SearchBar/Searchbar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [moviesList, setMovies] = useState([]);
  const [key, setKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const page = params.get('page') ?? 1;

  useEffect(() => {
    if (!query.trim()) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await FetchMovies(query, page);

        if (fetchedMovies.total_results === 0) {
          toast.error(`There is no movies on query '${query}'`);
          return;
        }

        Number(page) === 1
          ? setMovies([...fetchedMovies.results])
          : setMovies(prevMovies => [...prevMovies, ...fetchedMovies.results]);
        setTotalMovies(fetchedMovies.total_results);
        setTotalPages(fetchedMovies.total_pages);
      } catch (error) {
        toast.error(`ERROR loading movies ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query, key, page]);

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      return toast.error('Search query can not be empty');
    }
    setParams({
      query: newQuery,
      page: 1,
    });
    setMovies([]);
    setTotalMovies(0);
    setTotalPages(0);

    setKey(Date.now());
  };

  const handleLoadMore = () => {
    params.set('page', Number(page) + 1);
    setParams(params);
  };

  return (
    <div>
      <Search onSubmitSearch={handleSubmit} />
      {isLoading && <Loader />}
      {moviesList.length > 0 && <Movies moviesList={moviesList} />}
      {totalMovies - moviesList.length > 0 && totalPages > page && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
}
