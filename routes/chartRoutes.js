// /server/routes/chartRoutes.js
const express = require('express');
const router = express.Router();

// Hardcoded data for Summary chart (line chart data)
router.get('/summary-data', (req, res) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        values: [15, 25, 35, 45, 55] // Sample values for testing
    };
    res.json(data);
});

// Hardcoded data for Reports chart (bar chart data)
router.get('/reports-data', (req, res) => {
    const data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        values: [100, 200, 300, 400] // Sample values for testing
    };
    res.json(data);
});

module.exports = router;
