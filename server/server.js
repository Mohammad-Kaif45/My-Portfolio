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
        const projects = await Project.find(); // Grab everything from the database
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching projects' });
    }
});

// POST: Catch, save, and email a new contact message
app.post('/api/messages', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. Save to MongoDB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        
        // 2. Send the Email using Web3Forms (Bypassing Render Firewall)
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                access_key: "396ca0d3-ae4e-4f96-8ee1-f058d197daba", // Your Web3Forms key
                name: name,
                email: email,
                message: message,
                subject: "New Message from Portfolio Website"
            })
        });

        const result = await response.json();

        // 3. Send single success response back to React
        if (result.success) {
            return res.status(200).json({ success: true, message: 'Message sent perfectly!' });
        } else {
            return res.status(500).json({ success: false, message: 'Failed to send via Web3Forms' });
        }

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});


// --- TEMPORARY DATA SEEDER ---
// This function adds your projects automatically if the database is empty
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