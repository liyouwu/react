var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划


var  obj = {
	username:String,
	password:String,
	email:String,
}

var model = mongoose.model("user",new Schema(obj));

module.exports = model;
