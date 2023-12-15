import { useLocation } from 'react-router-dom';
import { Link, MovieImage, MovieList } from './MoviesList.styled';

export const Movies = ({ moviesList }) => {
  const location = useLocation();

  return (
    <MovieList>
      {moviesList.map(({ id, title, poster_path }, key = { id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
                }
                alt={title}
              />
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </MovieList>
  );
};
