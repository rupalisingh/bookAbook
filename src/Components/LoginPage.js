import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Data:', { email, password });
    // Add logic for login authentication
    // If login is successful, navigate to home page
    history('/');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
