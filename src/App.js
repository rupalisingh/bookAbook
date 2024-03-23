import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/Register';
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
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path = "/user-profile-setup" element = {<UserProfileSetup/>} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
