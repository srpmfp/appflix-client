import PropTypes from 'prop-types';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './movie-view.scss';

export const MovieView = ({ movie, backButton }) => {
  return (
    <Card className='movieViewCard justify-content-center align-items-center p-1'>
      <Button className='float-right w-25 btn-secondary'>Add</Button>
      <Card.Body md={3} sm={6}>
        <Card.Img
          md={3}
          sm={6}
          xs={12}
          src={movie.image}
          style={{ width: '50%' }}
          alt='Movie Title Image'
        />
        <Card.Title className='text-light'> Title: {movie.title}</Card.Title>
        <ListGroup className='movieViewList'>
          <ListGroup.Item> Genre: {movie.genre}</ListGroup.Item>
          <ListGroup.Item> Director: {movie.director.name}</ListGroup.Item>
          <ListGroup.Item>Bio: {movie.director.bio}</ListGroup.Item>
          <ListGroup.Item>
            Birthday: {new Date(movie.director.birthday).toLocaleDateString()}
          </ListGroup.Item>
        </ListGroup>
        <Button className='p-1 m-2 ' onClick={() => backButton()}>
          Back
        </Button>
      </Card.Body>
    </Card>
  );
};
MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      birthday: PropTypes.string,
    }),
    image: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  backButton: PropTypes.func,
};
