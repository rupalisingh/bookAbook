import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const recommendedBooks = [
  { title: 'Title 1', id: 1 },
  { title: 'Title 2', id: 2 },
  { title: 'Title 3', id: 3 },
];

const BookRecommendations = () => {
  const handleBookClick = (bookId) => {
    console.log(`Book with ID ${bookId} was clicked.`);
  };

  return (
    <Card elevation={3} sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Books We Recommend:
        </Typography>
        {recommendedBooks.map((book) => (
          <CardActionArea key={book.id} onClick={() => handleBookClick(book.id)} sx={{ marginTop: 2 }}>
            <Typography variant="h6" gutterBottom>
              {book.title}
            </Typography>
          </CardActionArea>
        ))}
      </CardContent>
    </Card>
  );
};

export default BookRecommendations;
