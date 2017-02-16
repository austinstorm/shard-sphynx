const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  _id: {type: String, required: true},
  name: String,
  legalname: String,
  RN: Number,
  companytype: String,
  brands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
