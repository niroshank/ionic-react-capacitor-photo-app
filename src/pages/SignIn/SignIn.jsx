import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Link
} from '@mui/material';
// import LogoImage from './path-to-your-logo-image.png'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Implement your sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Card style={{ marginTop: '20px' }}>
                <CardContent>
                    {/* <img src={LogoImage} alt="Logo" style={{ width: '100%', marginBottom: '20px' }} /> */}

                    <Typography variant="h5" gutterBottom>
                        Sign In
                    </Typography>

                    {/* Your sign-in form components go here */}
                    <TextField label="Username" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />

                    <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Sign In
                    </Button>

                    <Typography variant="body2" style={{ marginTop: '10px' }}>
                        Don't have an account? <Link to="/sign-up">Sign Up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SignIn;
