import React, { useState, useEffect } from 'react';
import { Typography, Select, MenuItem, FormControl, InputLabel, List, ListItem } from '@mui/material';

const BookGenreSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Placeholder for fetching books based on selected genre from the database
    // You will replace this with your actual data fetching logic
    const fetchBooks = async () => {
      // const response = await fetch('/api/books?genre=' + selectedGenre);
      // const booksFromDb = await response.json();
      const booksFromDb = [
        { title: 'Book 1' },
        { title: 'Book 2' },
        { title: 'Book 3' }
        // This would be replaced by the actual response from the database
      ];
      setBooks(booksFromDb);
    };

    if (selectedGenre) {
      fetchBooks();
    }
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="genre-select-label">Select a Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre}
          label="Select a Genre"
          onChange={handleGenreChange}
          placeholder="from the db"
        >
          {/* Replace these with actual genres fetched from the database */}
          <MenuItem value="fiction">Fiction</MenuItem>
          <MenuItem value="non-fiction">Non-Fiction</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
          <MenuItem value="mystery">Mystery</MenuItem>
          {/* etc. */}
        </Select>
      </FormControl>
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Books
      </Typography>
      <List>
        {books.map((book, index) => (
          <ListItem key={index}>{book.title}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookGenreSelector;
