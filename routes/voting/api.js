const router = require("express").Router();
const { presidents, vicePresidents, senators } = require("../../db");
const checkAuth = require("../../middleware/checkAuth");

//GET PRESIDENTS LIST
router.get("/president-list", checkAuth, (req, res) => {
  if (!presidents) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(presidents);
});

//GET VICE PRESIDENTS LIST
router.get("/vice-president-list", checkAuth, (req, res) => {
  if (!presidents) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(vicePresidents);
});

//GET SENATORS LIST
router.get("/senator-list", checkAuth, (req, res) => {
  if (!presidents) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(senators);
});

router.get("/category/:category", checkAuth, (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(404).json({
      errors: [
        {
          msg: "Must submit a category payload!",
        },
      ],
    });
  }

  const categoryName = olxLists
    .filter((cat) => {
      return cat.item_category === category;
    })
    .map((items) => {
      return items;
    });

  return res.json(categoryName);
});

module.exports = router;
