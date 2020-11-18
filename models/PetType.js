const mongoose = require('mongoose');

const PetTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Pet_Type', PetTypeSchema);