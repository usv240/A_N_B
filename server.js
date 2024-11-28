const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
const chartRoutes = require('./routes/chartRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || 'http://localhost:8080', // Allow frontend origin (adjust as needed)
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
        credentials: true, // Allow cookies and headers like Authorization
    })
);

// Body parser middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/chart', chartRoutes);

// Handle undefined routes (Optional)
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
