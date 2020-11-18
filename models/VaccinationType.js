const mongoose = require('mongoose');

const VaccinationTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Vaccination_Type', VaccinationTypeSchema);