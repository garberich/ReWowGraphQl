const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product_Type',
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);