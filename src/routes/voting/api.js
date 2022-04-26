const router = require("express").Router();
const {
  presidents,
  vicePresidents,
  senators,
  mySelectedVotes,
} = require("../../db");
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

// SEND USER VOTE
router.post("/myvote", checkAuth, (req, res) => {
  const { president_name, vice_president_name, senators } = req.body;

  if (!president_name || !vice_president_name || !senators) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload",
        },
      ],
    });
  } else {
    mySelectedVotes.push({
      president_name: president_name,
      vice_president_name: vice_president_name,
      senators: senators,
    });

    return res.json("submitted successfully!");
  }
});

router.get("/summary", checkAuth, (req, res) => {
  res.json({
    message: "Success vote is submitted",
    success_icon:
      "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description:
      "The staff is confirming your voted candidates!",
  });
});

// GET USER VOTE
router.get("/history", (req, res) => {
  res.json(mySelectedVotes);
});

module.exports = router;
