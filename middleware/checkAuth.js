const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");

  // CHECK IF WE EVEN HAVE A TOKEN
  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "No token found",
        },
      ],
    });
  }

  try {
    const user = await jwt.verify(token, "nfb32iur32ibfqfvi3vf932bg932g932");
    req.token = token;
    req.user = user.email;
    next();
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
};
