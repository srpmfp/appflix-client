import { Image, Card, Container, Col } from 'react-bootstrap';
import './movie-card.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Col className='movieCol'>
      <Card
        onClick={() => {
          onMovieClick(movie);
        }}>
        <Card.Img src={movie.image} variant='top' />
        <Card.Body className='p-0 movieCardBody text-center text-white text-outline'>
          <Card.Title className='mTitleText movieCard text-light'>{movie.title}</Card.Title>
          <Card.Text className='mGenreText movieCard'>{movie.genre}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.shape({
      bio: PropTypes.string,
      name: PropTypes.string,
      birthday: PropTypes.date,
    }),
    genre: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
  }),
  onMovieClick: PropTypes.func.isRequired,
};
