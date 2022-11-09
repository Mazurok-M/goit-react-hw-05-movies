import { useState } from 'react';
import { Input, Button } from './Query.styled';
import PropTypes from 'prop-types';

export default function Query({ onSubmit }) {
  const [movies, setMovies] = useState('');

  const handleChange = e => {
    setMovies(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movies);
    setMovies('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movies}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}

Query.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
