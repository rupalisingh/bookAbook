import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const HomePage = () => {
  const recommendedBooks = [
    { title: 'Book 1', author: 'Author 1', genre: 'Fiction' },
    { title: 'Book 2', author: 'Author 2', genre: 'Thriller' },
    { title: 'Book 3', author: 'Author 3', genre: 'Romance' },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>Recommended Books</Typography>
      <Grid container spacing={3}>
        {recommendedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">by {book.author}</Typography>
                <Typography variant="body2">Genre: {book.genre}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
