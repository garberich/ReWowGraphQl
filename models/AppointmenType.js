const mongoose = require('mongoose');

const AppointmentTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Appointment_Type', AppointmentTypeSchema);