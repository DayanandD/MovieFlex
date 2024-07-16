
import React from 'react';
import { Grid, Card, CardMedia, Typography } from '@mui/material';

function MoviesGrid({ movies }) {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <Card className="movie-card">
              <CardMedia
                component="img"
                alt={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
              <div className="movie-info">
                <Typography variant="body1">{movie.title}</Typography>
                <Typography variant="body2">⭐ {movie.vote_average}</Typography>
                <Typography variant="body2">🔥 {movie.popularity}</Typography>
              </div>
              <div className="movie-description">
                <Typography variant="body2">{movie.overview}</Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MoviesGrid;
