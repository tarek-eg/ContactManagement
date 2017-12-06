const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    address: String,
    mobile: String,
});

module.exports = mongoose.model('contact', contactSchema, 'contacts');