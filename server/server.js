const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Project = require('./models/Project');
const Message = require('./models/Message');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB.');
        seedDatabase(); // Run the auto-injector once connected
    })
    .catch((error) => console.error('MongoDB connection error:', error));

// --- API ROUTES ---

// GET: Fetch all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching projects' });
    }
});

// POST: Catch and save a new contact message to the database ONLY
app.post('/api/messages', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. Save to MongoDB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        
        // 2. Send success response back to React
        return res.status(200).json({ success: true, message: 'Message saved to database!' });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

// --- TEMPORARY DATA SEEDER ---
const seedDatabase = async () => {
    try {
        const count = await Project.countDocuments();
        if (count === 0) {
            console.log('Database is empty. Injecting portfolio projects...');
            await Project.insertMany([
                {
                    title: 'FinVault-Banking-System',
                    description: 'A comprehensive banking management system utilizing a microservices architecture to handle secure transactions and scalable user account management.',
                    tech: ['Java', 'Spring Boot', 'Microservices', 'SQL'],
                    github: 'https://github.com/Mohammad-Kaif45/FinVault-Banking-System'
                },
                {
                    title: 'HarvestHub',
                    description: 'An agricultural e-commerce platform facilitating direct trade. Features robust authentication and a responsive user interface.',
                    tech: ['Spring Boot', 'Spring Security', 'Thymeleaf', 'Java'],
                    github: 'https://github.com/Mohammad-Kaif45/HarvestHub'
                },
                {
                    title: 'Bank Management System',
                    description: 'A professional developer portfolio built to showcase full-stack capabilities, featuring a React frontend and an Express/MongoDB backend.',
                    tech: ['Java', 'Object Oriented Programming', 'Collection framework', 'MySql', 'JDBC'],
                    github: 'https://github.com/Mohammad-Kaif45/Bank-Management-System'
                }
            ]);
            console.log('Projects successfully injected!');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});