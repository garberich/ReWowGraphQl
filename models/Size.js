const mongoose = require('mongoose');

const SizeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Size', SizeSchema);