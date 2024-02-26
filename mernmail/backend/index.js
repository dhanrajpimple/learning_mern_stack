const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('');

// Define a simple model for storing email addresses
const EmailSchema = new mongoose.Schema({
  email: String,
});

const EmailModel = mongoose.model('Email', EmailSchema);

// Express route to handle email submission
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  // Save the email to MongoDB
  const newEmail = new EmailModel({ email });
  await newEmail.save();

 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: '',
    },
  });

  // Define the email options
  const mailOptions = {
    from: '',
    to: email,
    subject: 'Test Email',
    text: 'This is a test email from your MERN stack application!',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: 'Email sent successfully!', info });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
