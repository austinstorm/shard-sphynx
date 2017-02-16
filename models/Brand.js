const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: String,
  _company: { type: String, ref: 'Company' },
});

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
