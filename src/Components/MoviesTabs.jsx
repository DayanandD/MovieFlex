import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const genres = [
  { id: '', name: 'All' },
  { id: '28', name: 'Action' },
  { id: '35', name: 'Comedy' },
  { id: '27', name: 'Horror' },
  { id: '18', name: 'Drama' },
  { id: '878', name: 'Sci-fi' },
];

function MoviesTabs({ selectedGenre, onSelectGenre }) {
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setTabValue(genres.findIndex(genre => genre.id === selectedGenre));
  }, [selectedGenre]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    onSelectGenre(genres[newValue].id);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      aria-label="genre tabs"
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        '& .MuiTabs-root': {
          borderRadius: '18px',
          gap: '3%',
          display: 'flex',
          width: '100%',
        },
        '& .MuiTab-root': {
          backgroundColor: '#505656',
          borderRadius: '18px',
          color: 'white',
          margin: '0 4px',
        },
        '& .MuiTab-root.Mui-selected': {
          backgroundColor: 'rgb(229, 9, 20)',
        },
        '& .MuiTab-root:hover': {
          backgroundColor: 'blue',
        },
      }}
    >
      {genres.map((genre) => (
        <Tab key={genre.id} label={genre.name} />
      ))}
    </Tabs>
  );
}

export default MoviesTabs;
