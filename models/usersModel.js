const mongoose = require('mongoose');

const Schema = mongoose;

const usersModel = new Schema({
    id: { type: Number },
    name: { type: String },
    phone: { type: Number },
    zip: { type: String },
    address1: { type: String },
    address2: { type: String },
    address3: { type: String, default: false },
    card: { type: String },
    cart: { type: Number },
})