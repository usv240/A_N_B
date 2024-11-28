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

// Dynamically configure CORS
app.use((req, res, next) => {
    const allowedOrigins = ['http://137.184.155.248:8080', 'http://localhost:8080']; // List of allowed origins
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// Body parser middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/chart', chartRoutes);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
