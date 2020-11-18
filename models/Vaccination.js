const mongoose = require('mongoose');

const VaccinationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VaccinationType',
        required: true
    }
});

module.exports = mongoose.model('Vaccination', VaccinationSchema);