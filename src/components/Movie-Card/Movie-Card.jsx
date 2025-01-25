import PropTypes from 'prop-types';
import { Card, Col, Button } from 'react-bootstrap';
import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Col fluid='md' md={3} sm={6} xs={12} className='bg-gradient position-relative'>
      <Card
        className='movieCardCont m-4 p-0'
        onClick={() => {
          onMovieClick(movie);
        }}>
        <Button className='position-absolute btn-secondary addBtn '>+</Button>
        <Card.Img src={movie.image} variant='top' className='movieCardImg' />
        <Card.Body className='p-0 movieCardBody text-center text-white text-outline'>
          <Card.Title className='mTitleText text-light'>{movie.title}</Card.Title>
          <Card.Text className='mGenreText'>{movie.genre}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
