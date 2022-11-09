import Query from 'components/Query/Query';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { moviesApi } from 'services/api';
import { Container, List } from './Movies.styled';

export default function Movies() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movies = searchParams.get('query');

  useEffect(() => {
    if (movies === null) {
      return;
    }
    moviesApi(movies).then(review => setResults(review));
  }, [movies]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <Container>
        <Query onSubmit={changeFilter} />
        <List>
          {movies !== null &&
            results.map(results => (
              <li key={results.id}>
                <Link to={`${results.id}`} state={{ from: location }}>
                  {results.title}
                </Link>
              </li>
            ))}
        </List>
      </Container>
    </main>
  );
}
