// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
	_id: Number, // if this is not defined then MongoDB will generate its object id
	name: String,
	desc: String,
	price: Number
});


//Return model 
module.exports = restful.model('Products', productSchema);
