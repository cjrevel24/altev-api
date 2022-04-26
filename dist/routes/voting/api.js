"use strict";

var router = require("express").Router();

var _require = require("../../db"),
    presidents = _require.presidents,
    vicePresidents = _require.vicePresidents,
    senators = _require.senators,
    mySelectedVotes = _require.mySelectedVotes;

var checkAuth = require("../../middleware/checkAuth"); //GET PRESIDENTS LIST


router.get("/president-list", checkAuth, function (req, res) {
  if (!presidents) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(presidents);
}); //GET VICE PRESIDENTS LIST

router.get("/vice-president-list", checkAuth, function (req, res) {
  if (!presidents) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(vicePresidents);
}); //GET SENATORS LIST

router.get("/senator-list", checkAuth, function (req, res) {
  if (!presidents) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(senators);
}); // SEND USER VOTE

router.post("/myvote", checkAuth, function (req, res) {
  var _req$body = req.body,
      president_name = _req$body.president_name,
      vice_president_name = _req$body.vice_president_name,
      senators = _req$body.senators;

  if (!president_name || !vice_president_name || !senators) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload"
      }]
    });
  } else {
    mySelectedVotes.push({
      president_name: president_name,
      vice_president_name: vice_president_name,
      senators: senators
    });
    return res.json("submitted successfully!");
  }
});
router.get("/summary", checkAuth, function (req, res) {
  res.json({
    message: "Success vote is submitted",
    success_icon: "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description: "The staff is confirming your voted candidates!"
  });
}); // GET USER VOTE

router.get("/history", function (req, res) {
  res.json(mySelectedVotes);
});
module.exports = router;
//# sourceMappingURL=api.js.map