import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Grid,
  Box,
  Divider,
  InputLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    readingExperience: '',
    favoriteGenre: '',
    favoriteBook: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
    navigate('/');
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        User Setup
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">1. Would you consider yourself an:</FormLabel>
              <RadioGroup
                row
                name="readingExperience"
                value={formData.readingExperience}
                onChange={handleInputChange}
              >
                <FormControlLabel value="expert" control={<Radio />} label="Expert Reader" />
                <FormControlLabel value="average" control={<Radio />} label="Average Reader" />
                <FormControlLabel value="first-time" control={<Radio />} label="First Time Reader" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>2. Which is your favorite genre?</InputLabel>
              <Select
                label="Favorite Genre"
                name="favoriteGenre"
                value={formData.favoriteGenre}
                onChange={handleInputChange}
              >
                <MenuItem value="fiction">Fiction</MenuItem>
                <MenuItem value="romance">Romance</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="3. What's your favorite book?"
              name="favoriteBook"
              value={formData.favoriteBook}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UserProfileSetup;
