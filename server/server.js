const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
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

// POST: Submit a new contact message (THIS WAS MISSING!)
// POST: Catch, save, and email a new contact message
app.post('/api/messages', async (req, res) => {
    try {
        const { name, email, message } = req.body; 

        // 1. Save to MongoDB (Just like before)
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // 2. Set up the Email Transporter (Connecting to Gmail)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 3. The Professional HTML Email Template
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending it to yourself
            subject: `💼 New Portfolio Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <div style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 15px; margin-bottom: 20px;">
                        <h2 style="color: #2563eb; margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <p style="font-size: 16px; color: #333;"><strong>👤 Name:</strong> ${name}</p>
                    <p style="font-size: 16px; color: #333;"><strong>✉️ Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                    
                    <h3 style="color: #4b5563; margin-top: 30px;">📝 Message:</h3>
                    <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                        <p style="font-size: 15px; line-height: 1.6; color: #1f2937; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                        <p style="font-size: 12px; color: #9ca3af;">This email was automatically generated from your MERN Portfolio.</p>
                    </div>
                </div>
            `
        };

        // 4. Send the Email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, text: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving or sending message:', error);
        res.status(500).json({ success: false, text: 'Failed to process message.' });
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
                    tech: ['Java','Object Oriented Programming', 'Collection framework','MySql','JDBC',],
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