var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划

var  obj = {
	title:String,
	img:String,
	pirce:String,
	count:String
}
var model = mongoose.model("detail",new Schema(obj));
module.exports = model;