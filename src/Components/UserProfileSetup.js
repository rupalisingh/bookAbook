import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate




const UserProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    language: '',
    country: '',
    readingExperience: '',
    taste: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  const handleSaveDetails = () => {
    navigate('/');
  }
    

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        User Profile Setup
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Reading Experience</InputLabel>
              <Select
                label="Reading Experience"
                name="readingExperience"
                value={formData.readingExperience}
                onChange={handleInputChange}
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Taste</InputLabel>
              <Select
                label="Taste"
                name="taste"
                value={formData.taste}
                onChange={handleInputChange}
              >
                <MenuItem value="fiction">Fiction</MenuItem>
                <MenuItem value="thriller">Thriller</MenuItem>
                <MenuItem value="romance">Romance</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" onClick={handleSaveDetails}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UserProfileSetup;
