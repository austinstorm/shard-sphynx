/**
 * GET /companies
 * List all companies.
 */
const Company = require('../models/Company.js');

exports.getCompanies = (req, res) => {
  Company.find((err, docs) => {
    res.render('companies/index', { companies: docs, title:'Companies' });
  });
};

/**
 * GET /companies/:RN
 * View individual company.
 * Using the RN, since it's necessary and unique
 */
exports.getViewCompany = (req, res, next) => {
  Company
    .findOne({ RN: req.params.RN })
    .populate('_brands')
    .exec((err, company) => {
      if (err) { return next (err); }
      if (!company) {
        req.flash('errors', {msg: 'No such company.' });
        return res.redirect('/companies');
      }
      res.render('companies/view', {
        title: 'Company',
        company: company
      });
    });
  };


/**
 * GET company/add
 * Add company page.
 */
exports.getAddCompany = (req, res) => {
  /* if (req.company) {
    return res.redirect('/');
  } */
  res.render('companies/add', {
    title: 'Add Company'
  });
};

/**
 * POST company/add
 * Add a company to the directory
 */
exports.postAddCompany = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/companies/add');
  }

  const company = new Company({
    name: req.body.name,
    legalname: req.body.legalname,
    RN: req.body.RN,
    companytype: req.body.companytype
  });

  Company.findOne({ name: req.body.name }, (err, existingCompany) => {
    if (err) { return next(err); }
    if (existingCompany) {
      req.flash('errors', { msg: 'A company with that name already exists.' });
      return res.redirect('/companies/add');
    }
    company.save((err) => {
      if (err) { return next(err); }
        res.redirect('/companies');
    });
  });
};