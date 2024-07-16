
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import MoviesTabs from './Components/MoviesTabs';
import MoviesGrid from './Components/MoviesGrid';
import './App.css';

const TMDB_API_KEY = '27636a14c5f3ace1be4c8337e66e42b6';


function App() {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2012);
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const moviesRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    fetchMovies(year, genre);
  }, [year, genre]);

  const fetchMovies = async (year, genre) => {
    setLoading(true);
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        sort_by: 'popularity.desc',
        primary_release_year: year,
        with_genres: genre,
        vote_count: 'gte=100',
      },
    });
    setMovies((prevMovies) => {
      if (genre === '') {
        return [...prevMovies, ...response.data.results];
      }
      return response.data.results;
    });
    setLoading(false);
  };

  const handleScroll = useCallback(() => {
    if (moviesRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = moviesRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setYear((prevYear) => prevYear + 1);
      } else if (scrollTop <= 0 && !loading) {
        setYear((prevYear) => (prevYear > 2012 ? prevYear - 1 : prevYear));
      }
      if (yearRef.current) {
        yearRef.current.innerText = year;
      }
    }
  }, [loading, year]);

  useEffect(() => {
    if (moviesRef.current) {
      moviesRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (moviesRef.current) {
        moviesRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const handleGenreChange = (genreId) => {
    setMovies([]);
    setGenre(genreId);
    setYear(2012);
  };

  return (
    <div>
    
      <h1>MOVIEFIX</h1>
      <MoviesTabs selectedGenre={genre} onSelectGenre={handleGenreChange} />
      <div ref={yearRef} className="year-indicator">{year}</div>
      <div
        ref={moviesRef}
        style={{ height: 'calc(100vh - 100px)', overflowY: 'auto', padding: '20px' }}
      >
        <MoviesGrid movies={movies} />
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
