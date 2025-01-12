import { useState, useEffect } from 'react';
import { MovieCard } from '../Movie-Card/Movie-Card';
import { MovieView } from '../Movie-View/Movie-View';


export const MainView = () => {
    const [movies, setMovies] = useState([
        { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: 'https://th.bing.com/th/id/OIP.mxlA-LOxaiyUZBhS3SD_HwHaLj?w=200&h=312&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...' },
        { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...' }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
    return (<div className="main-view">
        {movies.map((movie) => (
            <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie)
                }} />))}
    </div>
    )
}