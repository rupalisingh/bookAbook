import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import UserProfileSetup from './Components/UserProfileSetup';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">bookAbook</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Routes> {/* Wrap Routes around Route components */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path = "/user-profile-setup" element = {<UserProfileSetup/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
