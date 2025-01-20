import { Image, Card } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import PropTypes from 'prop-types';
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Stack direction="horizontal" gap={3}>
            <Card style={{ width: "10rem" }} onClick={() => {
                onMovieClick(movie)
            }}>
                <Image src={movie.image} thumbnail />
                <Card.Body>
                    <Card.Title className="p-2">{movie.title}</Card.Title>
                    <Card.Text>{movie.genre}</Card.Text>
                </Card.Body>
            </Card>
        </Stack>
    );
}
MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        director: PropTypes.shape({
            bio: PropTypes.string,
            name: PropTypes.string,
            birthday: PropTypes.date
        }),
        genre: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.string,
    }),
    onMovieClick: PropTypes.func.isRequired
}

