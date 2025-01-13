import PropTypes from 'prop-types';
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}>
            {
                movie.title
            }
        </div>
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
        _id: PropTypes.string,
    }),
    //   onMovieClick: PropTypes.func.isRequired
}

