const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    date_appointment: {
        type: Date,
        required: true
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment_Type',
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);