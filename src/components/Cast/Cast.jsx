import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { castApi } from 'services/api';
import { Container, WrapText, Img, Box } from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    castApi(movieId).then(cast => setActors(cast.slice(0, 14)));
  }, [movieId]);

  return (
    <Container>
      {actors.map(actor => (
        <Box key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width="200"
            />
          ) : (
            <Img></Img>
          )}

          <h3>{actor.name}</h3>
          <p>
            <WrapText>Character: </WrapText> {actor.character}
          </p>
        </Box>
      ))}
    </Container>
  );
}
