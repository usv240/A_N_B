// /server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/nbad_anusha', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
