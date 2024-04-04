import React, { useState } from 'react';
import { Typography, Button, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Functions to handle button clicks
  const handleBrowseByGenre = () => {
    navigate('/browse-genre'); // Replace with your actual route
  };

  const handleGetRecommendation = () => {
    navigate('/recommendations'); // Replace with your actual route
  };

  const handleSettings = () => {
    navigate('/settings'); // Replace with your actual route
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom component="div" style={{ textAlign: 'center' }}>
        WELCOME
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" onClick={handleBrowseByGenre}>
            BROWSE BOOKS BY GENRE
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleGetRecommendation}>
            GET RECOMMENDATION
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSettings}>
            SETTINGS
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom component="div" style={{ textAlign: 'center', marginTop: '20px' }}>
        "How do you feel today?"
      </Typography>
      <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Pop-up
        </Button>
      </Grid>

      {/* Dialog Pop-up */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"How do you feel today?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a check-in pop-up. You can use this space to gather more information from the user or provide interactive content.
          </DialogContentText>
          {/* Additional content can be added here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default HomePage;
