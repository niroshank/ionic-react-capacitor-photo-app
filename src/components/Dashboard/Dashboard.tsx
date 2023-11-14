// src/components/Dashboard/Dashboard.jsx

import React, { useState } from 'react';
import { Grid, Button, Typography, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BoardStocks from '../BoardStocks/BoardStocks';
import { Warning, NotificationsActive, LocationOn, ListAlt, AddBox, AccountBox, ContactMail, CameraAlt, ExitToApp } from '@mui/icons-material';
// Import other components as needed
import 'leaflet/dist/leaflet.css';
const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleButtonClick = (component: any) => {
        setActiveComponent(component);
    };

    const features = [
        { name: 'Board Stocks', icon: <Warning />, disabled: false },
        { name: 'Camera Test', icon: <CameraAlt />, disabled: false },
        { name: 'Locate Me', icon: <LocationOn />, disabled: false },
        { name: 'Movement Details', icon: <ListAlt />, disabled: true },
        { name: 'Add New Listing', icon: <AddBox />, disabled: true }, // Disable this button
        { name: 'Account Details', icon: <AccountBox />, disabled: true },
        { name: 'Contact Us', icon: <ContactMail />, disabled: true },
        { name: 'Active Boards', icon: <NotificationsActive />, disabled: true }, // Disable this button
        { name: 'Logout', icon: <ExitToApp />, disabled: true }, // Disable this button
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: '#3498db', textAlign: 'center' }}>
                Signmaster
            </Typography>

            <Grid container spacing={2} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {features.map((feature, index) => (
                    <Grid key={index} item xs={4} sm={4} md={4} style={{ display: 'flex' }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            component={Link}
                            to={`/${feature.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => handleButtonClick(feature.name)}
                            style={{
                                backgroundColor: '#3498db',
                                color: 'white',
                                paddingTop: '100%', // Maintain 1:1 aspect ratio
                                position: 'relative',
                                opacity: feature.disabled ? 0.5 : 1, // Set opacity based on disabled status
                            }}
                            disabled={feature.disabled} // Disable the button based on the disabled status
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >
                                {feature.icon}
                                <Typography variant="body2" style={{ color: 'white' }}>
                                    {feature.name}
                                </Typography>
                            </div>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
