const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Registration = require('./models/form');

const port = 1000;

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/registrationDB');

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/submit', (req, res) => {
    const {
        name,
        email,
        subject,
        age,
        phone,
        gender,
        address,
        city,
        state,
        country,
        zip,
        id,
        dob,
        institution,
        grade,
        parentName,
        emergencyContact,
        examCenter,
        language,
        experience,
        notes
    } = req.body;

    const newRegistration = new Registration({
        name,
        email,
        subject,
        age,
        phone,
        gender,
        address,
        city,
        state,
        country,
        zip,
        id,
        dob,
        institution,
        grade,
        parentName,
        emergencyContact,
        examCenter,
        language,
        experience,
        notes
    });
    newRegistration.save()
    .then(() => {
        res.status(200).send('Data saved successfully');
    })
    .catch(err => {
        console.error('Error saving data:', err);
        res.status(500).send('Error saving data');
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
