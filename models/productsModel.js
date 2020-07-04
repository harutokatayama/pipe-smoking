const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsModel = new Schema({
    id: { type: Number },
    name: { type: String },
    price: { type: Number },
    section: { type: String },
    imageUrl: { type: String },
    brandName: { type: String },
    type: { type: String },
    stock: { type: Number },
    origin: { type: String },
    evaluation: { type: Number },
    condition: { type: Number },
    strength: { type: Number },
    want: { type: Number },
    sold: { type: Number }
});

module.exports = mongoose.model('Products', productsModel);