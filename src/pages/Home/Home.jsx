import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { trendingApi } from 'services/api';
import { Container, NavItem, TrendingList } from './Home.styled';

export default function Home() {
  const location = useLocation();
  const [trendindMovies, setTrendindMovies] = useState([]);

  useEffect(() => {
    trendingApi().then(results => setTrendindMovies(results));
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <TrendingList>
        {trendindMovies.length > 0 &&
          trendindMovies.map(results => (
            <li key={results.id}>
              <NavItem to={`/movies/${results.id}`} state={{ from: location }}>
                {results.title}
              </NavItem>
            </li>
          ))}
      </TrendingList>
    </Container>
  );
}
