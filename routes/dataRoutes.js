// /server/routes/dataRoutes.js
const express = require('express');
const router = express.Router();

// Define the summary route
router.get('/summary', (req, res) => {
    res.json({ summary: "This is your summary data." });
});

module.exports = router;
