const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true },
    id: { type: String, required: true },
    dob: { type: String, required: false},
    institution: { type: String, required: true },
    grade: { type: String, required: true },
    parentName: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    examCenter: { type: String, required: true },
    language: { type: String, required: true, enum: ['english', 'hindi', 'other'] },
    experience: { type: String, required: false },
    notes: { type: String, required: false },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
