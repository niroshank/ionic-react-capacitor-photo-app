import React, { useState } from 'react';
import { Button, Card, CardContent, CardActions, Typography, Container } from '@mui/material';
import { Camera, CameraResultType } from '@capacitor/camera';
import FeatureHeader from '../FeatureHeader/FeatureHeader';

const CameraUpload = () => {
  const [photoData, setPhotoData] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      if (image.dataUrl) {
        setPhotoData(image.dataUrl);
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const deletePhoto = () => {
    setPhotoData(null);
  };

  const handleBackClick = () => {
    // Handle back button click
    console.log('Back button clicked');
  };

  const handleProfileClick = () => {
    // Handle profile icon click
    console.log('Profile icon clicked');
  };

  return (
    <><FeatureHeader title="Board Stocks" /><Container>
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Camera Test
          </Typography>
          {photoData ? (
            <div>
              <img src={photoData} alt="Captured" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            </div>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No photo captured.
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={takePhoto}>
            Take a Photo
          </Button>
          {photoData && (
            <Button variant="outlined" color="secondary" onClick={deletePhoto}>
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Container></>
  );
};

export default CameraUpload;
