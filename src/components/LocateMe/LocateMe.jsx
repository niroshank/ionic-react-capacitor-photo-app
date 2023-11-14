import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Geolocation } from '@capacitor/geolocation';
import FeatureHeader from '../FeatureHeader/FeatureHeader';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet's default marker icon
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const LocateMe = () => {
    const [position, setPosition] = useState([0, 0]);
    const [mapReady, setMapReady] = useState(false);

    const locateMe = async () => {
        try {
            const coordinates = await Geolocation.getCurrentPosition();
            setPosition({ lat: coordinates.coords.latitude, lng: coordinates.coords.longitude });
            console.log(coordinates)
            setMapReady(true);
        } catch (error) {
            console.error('Error getting current location:', error);
        }
    };

    useEffect(() => {
        locateMe();
    }, []);

    return (
        <>
            <FeatureHeader title="Locate Me" />
            <Container style={{ marginTop: '20px' }}>
                <Card>
                    <CardContent>
                        <Button variant="contained" color="primary" onClick={locateMe} style={{ marginBottom: '10px' }}>
                            Get Current Location
                        </Button>
                        {mapReady && (
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }} whenReady={() => setMapReady(true)}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={defaultIcon}>
                                    <Popup>
                                        Your location
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default LocateMe;
