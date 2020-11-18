const mongoose = require('mongoose');

const ProductTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product_Type', ProductTypeSchema);