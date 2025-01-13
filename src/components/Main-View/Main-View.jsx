import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch(
            "https://appflixcf-d4726ef19667.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const movieData = data.map((movie) => {
                    return {
                        id: movie._id,
                        title: movie.title,
                        genre: movie.genre,
                        director: movie.director.name,
                        directorBio: movie.director.bio,
                        directorBirthday: movie.director.birthday,
                        image: movie.image,

                    };
                });
                setMovies(movieData);
            })
    }, []);

    // If the list of movies is empty, the user will receive this message
    if (movies.length === 0) return
    <div className="main-view">
        The list is empty!
    </div>;

    // If a movie is selected, the user will see the movie view

    if (selectedMovie) {
        return (<MovieView
            movie={selectedMovie}
            backButton={() => {
                setSelectedMovie(null);
            }}
        />);
    }

    // Otherwise, the user will see the main view
    return (
        <div className="main-view">
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie)
                    }}
                />))}
        </div>
    )
}