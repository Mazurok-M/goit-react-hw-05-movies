import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieDetailsApi } from 'services/api';
import {
  Back,
  Box,
  Container,
  List,
  NavItem,
  BackBox,
} from './MovieDetails.styled';
import { Suspense } from 'react';

export default function MovieDetails() {
  const [detalis, setDetalis] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    movieDetailsApi(movieId).then(results => setDetalis(results));
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    detalis;

  return (
    <main>
      <BackBox>
        <Back to={backLink}>Go back</Back>
      </BackBox>
      <Container>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="350"
            />
          )}
        </div>
        <div>
          <h1>
            {title}
            <span> {new Date(release_date).getFullYear()}</span>
          </h1>
          <p>
            User Score: <span>{Math.round(vote_average * 10)}%</span>
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.name}>{genre.name}</li>)}
          </ul>
        </div>
      </Container>
      <Box>
        <h3>Additional information</h3>
        <List>
          <li>
            <NavItem to={'cast'} state={{ from: backLink }}>
              Cast
            </NavItem>
          </li>
          <li>
            <NavItem to={'reviews'} state={{ from: backLink }}>
              Reiwes
            </NavItem>
          </li>
        </List>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
