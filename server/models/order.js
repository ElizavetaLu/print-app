const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    qty: Number,
    userId: String,
    promocode: String,
    side: String,
    size: String,
    type: String,
    fabricColor: String,
    finalDesign: String,
    originalImg: String,
    originalImgLocation: {
        width: Number,
        x: Number,
        y: Number
    },
    orderStatus: String
})

const ModelClass = mongoose.model('order', orderSchema);
module.exports = ModelClass