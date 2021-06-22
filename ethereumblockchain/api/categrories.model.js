const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Categories = new Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean
    }
}, {
    collection: 'categories'
});

module.exports = mongoose.model('Categories', Categories);