import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Paper,
    Container,
    Grid,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import FeatureHeader from '../FeatureHeader/FeatureHeader';
import { useNavigate } from 'react-router-dom';

const BoardStocks = () => {
    const navigate = useNavigate();
    const [stockData, setStockData] = useState([
        { id: 1, stockType: 'Combined', inStock: -14, onStreet: 42, active: false },
        { id: 2, stockType: 'Premium', inStock: -4, onStreet: 3, active: true },
    ]);

    const handleAddRow = () => {
        const newId = stockData.length + 1;
        setStockData([...stockData, { id: newId, stockType: '', inStock: 0, onStreet: 0, active: false }]);
    };

    const handleStockTypeChange = (id: any, value: any) => {
        setStockData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, stockType: value } : row))
        );
    };

    const handleActiveChange = (id: any) => {
        setStockData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, active: !row.active } : row))
        );
    };

    return (
        <><FeatureHeader title="Board Stocks" /><Container>
            <Card style={{ marginTop: '20px' }}>
                <CardContent>
                    <Typography variant="h6" style={{ color: '#3498db', textAlign: 'center' }}>
                        Current Stock
                    </Typography>

                    <Card style={{ marginTop: '10px', padding: '10px' }}>
                        <Typography variant="body2" color="textSecondary">
                            Sample Text
                        </Typography>
                    </Card>

                    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                        <Table>
                            <TableHead style={{ backgroundColor: '#3498db', color: 'white' }}>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>Stock Type</TableCell>
                                    <TableCell style={{ color: 'white' }}>In Stock</TableCell>
                                    <TableCell style={{ color: 'white' }}>On Street</TableCell>
                                    <TableCell style={{ color: 'white' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stockData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <Select
                                                value={row.stockType}
                                                onChange={(e) => handleStockTypeChange(row.id, e.target.value)}
                                            >
                                                <MenuItem value="Combined">Combined</MenuItem>
                                                <MenuItem value="Premium">Premium</MenuItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell>{row.inStock}</TableCell>
                                        <TableCell>{row.onStreet}</TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={row.active}
                                                        onChange={() => handleActiveChange(row.id)}
                                                    />
                                                }
                                                label=""
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid container spacing={2} style={{ marginTop: '20px' }}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="In Stock"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)} // Handle input change
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="On Street"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                onChange={(e) => console.log(e.target.value)} // Handle input change
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={handleAddRow} fullWidth>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container></>
    );
};

export default BoardStocks;
