const mongoose = require('mongoose');

const Schema = mongoose;

const packageModel = new Schema({
    id: { type: Number },
    state: { type: String },
    user_id: { type: Number }
})

module.exports = mongoose.model('Package', packageModel);