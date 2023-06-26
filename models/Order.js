const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    title : { type : String, required : true, unique : true},
    description : { type : String, required : true},
    img : { type : String, required : true},
    category : { type : Array, required : true },
    price : { type : Number }

});

module.exports = mongoose.model('Order', OrderSchema);