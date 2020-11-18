const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size',
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet_Type',
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pet', PetSchema);