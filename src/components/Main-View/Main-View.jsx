import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import './main-view.scss';
import { Col, Container, Row } from 'react-bootstrap';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  // User Information
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  //Movie information
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  // return movie info from the database GET REQ
  useEffect(() => {
    fetch('https://appflixcf-d4726ef19667.herokuapp.com/movies', {
      headers: { Authorization: `bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const movieData = data.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            genre: movie.genre,
            director: {
              name: movie.director.name,
              bio: movie.director.bio,
              birthday: movie.director.birthday,
            },
            image: movie.image,
          };
        });
        setMovies(movieData);
      });
  }, [token]);

  return (
    <Row>
      {!user || !token ? (
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or
          <SignupView />
        </Col>
      ) : // If the list of movies is empty, the user will receive this message
      movies.length === 0 ? (
        <div className='main-view'>The list is empty!</div>
      ) : // If a movie is selected, the user will see the movie view

      selectedMovie ? (
        <MovieView
          movie={selectedMovie}
          key={movies.title}
          backButton={() => {
            setSelectedMovie(null);
          }}
        />
      ) : (
        // Otherwise, the user will see the main view
        <>
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
          <button
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}>
            Log Out
          </button>
        </>
      )}
    </Row>
  );
};
