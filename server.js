// /server/server.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes'); // Ensure this is correctly imported
const chartRoutes = require('./routes/chartRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/data', dataRoutes); // Mounting dataRoutes on /api/data
app.use('/api/chart', chartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
