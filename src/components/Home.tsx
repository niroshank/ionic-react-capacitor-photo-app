import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
<div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Tab 1</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4">Tab 1</Typography>
        {/* ExploreContainer component content goes here */}
      </Container>
    </div>
    );
}

export default Home;