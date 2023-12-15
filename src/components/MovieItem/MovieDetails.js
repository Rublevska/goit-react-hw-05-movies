import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  AddLink,
  BackLink,
  MainDiscr,
  MainTitle,
  MovieData,
  MovieDetailsSection,
  MovieImage,
  SubLink,
  SubLinkMemu,
  Subtitle,
} from './MovieDetails.styled';

export const MovieDetails = ({
  movieDescribe: { title, poster_path, overview, vote_average, genres },
}) => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  return (
    <MovieDetailsSection>
      <BackLink to={backLinkRef.current.state?.from ?? '/movies'}>
        Go back
      </BackLink>
      <MainDiscr>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
          }
          alt={title}
        />
        <MovieData>
          <MainTitle>{title}</MainTitle>
          <p>User score: {Math.round(Number(vote_average) * 10)}%</p>
          <Subtitle>Overview</Subtitle>
          <p>{overview}</p>
          <Subtitle>Genres</Subtitle>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieData>
      </MainDiscr>

      <Subtitle>Additional information</Subtitle>
      <SubLinkMemu>
        <SubLink>
          <AddLink to="cast">Cast</AddLink>
        </SubLink>
        <SubLink>
          <AddLink to="rewiews">Rewiews</AddLink>
        </SubLink>
      </SubLinkMemu>

      <Outlet />
    </MovieDetailsSection>
  );
};
