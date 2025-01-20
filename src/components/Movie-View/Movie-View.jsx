import PropTypes from "prop-types";

export const MovieView = ({ movie, backButton }) => {
    return (
        <div className="movie-view">

            <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.title}</span>
            </div>
            <div className="movie-director">
                <span className="label">Genre: </span>
                <span className="value">{movie.genre}</span>
            </div>
            <div className="movie-director">
                <span className="label">director: </span>
                <span className="value">{movie.director.name}</span>
                <div>
                    <span className="label">Bio: </span>
                    <span className="value">{movie.director.bio}</span>
                </div>
                <div>
                    <span className="label">Birthday: </span>
                    <span className="value">{movie.director.birthday}</span>
                </div>
            </div>
            <div className="movie-poster">
                <img src={movie.image} alt="Movie Title Image" />
            </div>
            <button onClick={() => backButton()}>Back</button>
        </div>

    );

}
MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string,
        director: PropTypes.shape({
            name: PropTypes.string,
            bio: PropTypes.string,
            birthday: PropTypes.string
        }),
        image: PropTypes.string,
        id: PropTypes.string
    }).isRequired,
    backButton: PropTypes.func
}


