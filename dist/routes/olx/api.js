"use strict";

var router = require("express").Router();

var _require = require("../../db"),
    olxLists = _require.olxLists;

var checkAuth = require("../../middleware/checkAuth"); //GET OLX CATEGORY LIST


router.get("/list", checkAuth, function (req, res) {
  if (!olxLists) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(olxLists);
});
router.get("/category/:category", checkAuth, function (req, res) {
  var category = req.params.category;

  if (!category) {
    return res.status(404).json({
      errors: [{
        msg: "Must submit a category payload!"
      }]
    });
  }

  var categoryName = olxLists.filter(function (cat) {
    return cat.item_category === category;
  }).map(function (items) {
    return items;
  });
  return res.json(categoryName);
});
module.exports = router;
//# sourceMappingURL=api.js.map