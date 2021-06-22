const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Products = new Schema({
    name: { type: String },
    price: { type: Number },
    //Người chăm sóc
    carer:{ type: String },
    //Người bán
    seller:{ type: String },
    //Bảo quản
    conservation:{type: String},
    //ngày gieo trồng
    sowingDate:{type: Date},
    //ngày thu hoạch
    harvestDate:{type: Date},
    //Đơn vị
    unit:{type: String},
    //Nơi trồng
    plantingPlace:{ type: String},
    image:{type:String},
    description:{type:String}

}, {
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);