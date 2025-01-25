import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/Movie-Card';
import { MovieView } from '../Movie-View/Movie-View';
import { LoginView } from '../login-view/login-view';
import { Card, Col, Row } from 'react-bootstrap';
import './main-view.scss';

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
    <Row className='main-view w-100'>
      {!user ? (
        <Col className='d-flex w-100 flex-column align-items-center justify-content-center'>
          <Card className='bg-dark w-50'>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }}
            />
          </Card>
        </Col>
      ) : // If the list of movies is empty, the user will receive this message
      movies.length === 0 ? (
        <div className='main-view'>The list is empty!</div>
      ) : // If a movie is selected, the user will see the movie view
      selectedMovie ? (
        <Col md={5} className='mb-5'>
          <MovieView
            movie={selectedMovie}
            key={movies.title}
            backButton={() => {
              setSelectedMovie(null);
            }}
          />
        </Col>
      ) : (
        // Otherwise, the user will see the main view

        <Col
          className='h-100 w-50 d-flex flex-row flex-{grow|shrink}-1 flex-wrap overflow-auto 
          align-self-center justify-content-center'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
          <Col className=' logBtn position-absolute bottom-0 left-0 d-flex flex-column '>
            <button
              className='btn btn-primary position-relative bottom-0'
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}>
              Log Out
            </button>
          </Col>
        </Col>
      )}
    </Row>
  );
};
