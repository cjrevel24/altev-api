const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { users } = require("../db");
const checkAuth = require("../middleware/checkAuth");
const ls = require("local-storage");

// SIGNUP
router.post(
  "/signup",
  [
    check("email", "Please input a valid email").isEmail(),
    check(
      "password",
      "Please input a password with a min length of 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    // Validate the inputs
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    // Validate if the user doesnt already exist;
    let user = users.find((user) => {
      return user.email === email;
    });

    if (user) {
      return res.status(422).json({
        errors: [
          {
            msg: "This user already exists",
          },
        ],
      });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Save the password into the db
    users.push({
      email,
      password,
      firstName,
      lastName,
    });

    const access_token = await JWT.sign(
      { email },
      "nfb32iur32ibfqfvi3vf932bg932g932",
      { expiresIn: 360000 }
    );

    const refresh_token = await JWT.sign(
      { email },
      "nfb32iur32ibfqfvi3vf932bg932g932",
      {
        expiresIn: 360000,
      }
    );

    return res.json({
      access_token,
      refresh_token,
    });
  }
);

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Check if user with email exists

  let user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return res.status(422).json({
      errors: [
        {
          msg: "Invalid Credentials",
        },
      ],
    });
  }

  // Check if the password if valid
  let isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      errors: [
        {
          msg: "Invalid Credentials",
        },
      ],
    });
  }

  // Send JSON WEB TOKEN
  const access_token = await JWT.sign(
    { email },
    "nfb32iur32ibfqfvi3vf932bg932g932",
    {
      expiresIn: 360000,
    }
  );

  const refresh_token = await JWT.sign(
    { email },
    "nfb32iur32ibfqfvi3vf932bg932g932",
    {
      expiresIn: 360000,
    }
  );

  return res.json({
    access_token,
    refresh_token,
  });
});

// ALL USER
router.get("/all", (req, res) => {
  return res.json(users);
});

//GET SPECIFIC USER
router.get("/me", checkAuth, (req, res) => {
  const token = req.header("x-auth-token");

  if (token == null) {
    return res.status(404).json({
      errors: [
        {
          msg: "Token invalid",
        },
      ],
    });
  }

  const getUser = users
    .filter((user) => {
      return user.email === req.user;
    })
    .map((specificUser) => {
      return {
        email: specificUser.email,
        firstName: specificUser.firstName,
        lastName: specificUser.lastName,
      };
    });

  return res.json(getUser);
});

//LOGOUT USER
router.delete("/logout", checkAuth, async (req, res) => {
  const { refresh_token } = req.body;
  try {
    const removeToken = refresh_token;
    ls.remove(removeToken);
    res.send("Logout successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
