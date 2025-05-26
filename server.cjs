const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const router = require("express/lib/application.js");

require('dotenv').config({ path: '.env.local', debug: true });

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));


// ✅ Rate Limiter Middleware (e.g., max 5 requests per hour per IP)
const mailLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 requests per windowMs
    message: {
        status: 429,
        message: 'Too many requests — please try again in 1 hour.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // must be false for port 587
    auth: {
        user: '8c3991001@smtp-brevo.com',
        pass: 'BEjWTQ8hpMO37bL1'
    }
});

app.post('/api/mail', async (req, res) => {
    const { firstName, lastName, email, phone, groupName, groupSize, date, tourType, details } = req.body;

    try {
        await transporter.sendMail({
            from: '"Marci Group Reservation Form" <simoncote.web@gmail.com>',
            to: 'simoncote.web@gmail.com, david@elephant.global',
            subject: `📩 Reservation Request from ${firstName} ${lastName}`,
            html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #6A2E35;">🎉 New Group Reservation</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Group Name:</strong> ${groupName || '—'}</p>
        <p><strong>Group Size:</strong> ${groupSize}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Event Type:</strong> ${tourType}</p>
        <hr style="margin: 20px 0;">
        <p><strong>Details:</strong></p>
        <p style="white-space: pre-wrap;">${details || 'No additional details provided.'}</p>
      </div>
    `
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Email error:', err);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});







