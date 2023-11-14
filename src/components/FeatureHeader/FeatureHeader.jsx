import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const FeatureHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ backgroundColor: '#3498db', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="back">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          {title}
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="profile">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default FeatureHeader;
