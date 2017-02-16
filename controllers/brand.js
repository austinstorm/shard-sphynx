/**
 * GET /brands
 * List all brands.
 */
const Brand = require('../models/Brand.js');

exports.getBrands = (req, res) => {
  Brand.find((err, docs) => {
    res.render('brands/index', { brands: docs, title:'Brands' });
  });
};

/**
 * GET brand/add
 * Add brand page.
 */
exports.getAddBrand = (req, res) => {
  /* if (req.user) {
    return res.redirect('/');
  } */
  res.render('brands/add', {
    title: 'Add Brand'
  });
};

/**
 * POST brand/add
 * Add a brand to the directory
 */
exports.postAddBrand = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/brands/add');
  }

  const brand = new Brand({
    name: req.body.name
  });

  Brand.findOne({ name: req.body.name }, (err, existingBrand) => {
    if (err) { return next(err); }
    if (existingBrand) {
      req.flash('errors', { msg: 'A brand with that name already exists.' });
      return res.redirect('/brands/add');
    }
    brand.save((err) => {
      if (err) { return next(err); }
        res.redirect('/brands');
    });
  });
};