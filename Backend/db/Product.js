const mongoose =  require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    Category:String,
    userId:String,
    Company:String

});

module.exports = mongoose.model('products', productSchema);