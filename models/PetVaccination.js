const mongoose = require('mongoose');

const PetVaccinationSchema = mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    vaccination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vaccination',
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pet_Vaccination', PetVaccinationSchema);