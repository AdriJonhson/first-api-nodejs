'use strict';
const mongoose  = require('mongoose');
const Costumer  = mongoose.model('Customer');

exports.create = async(data) => {
	var costumer = new Costumer(data);
	await costumer.save();
}

exports.authenticate = async(data) => {
	var res = await Costumer.findOne({
		email: data.email,
		password: data.password
	});
	return res;
}

exports.getById = async(id) => {
	var res = await Costumer.findById(id);
	return res;
}
