const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    order: {
        type: Array,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Sale', SaleSchema);