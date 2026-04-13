const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Basic test route
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running professionally.' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});