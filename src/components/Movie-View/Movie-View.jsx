export const MovieView = ({ movie, backButton }) => {
    return (
        <div className="movie-view">
            <div className="movie-poster">
                <img src={movie.ImagePath} />
            </div>
            <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
            </div>
            <button onClick={() => backButton()}>Back</button>
        </div>
    );
}