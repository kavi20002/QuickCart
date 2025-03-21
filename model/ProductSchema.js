const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    dealData: {
        type: Object
    },
    displayPrice: {
        type: Number
    },
    actualPrice: {
        type: Number
    },
    images: {
        type: Array
    },
    qty: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("product", ProductSchema);