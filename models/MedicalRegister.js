const mongoose = require('mongoose');

const MedicalRegisterSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Medical_Register', MedicalRegisterSchema);