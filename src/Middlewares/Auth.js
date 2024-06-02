const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      const token = req.headers["authorization"];
      JWT.verify(token, process.env.JWT_SECRET);
      next();
    } catch (e) {
      res.status(401).json({ Message: "Token inválido!" });
    }
  } else {
<<<<<<< HEAD
=======
    console.log(req.headers["authorization"]);
>>>>>>> ca87b0074156ff00801a5b220dde0ca4b678b10c
    res.status(400).json({ Message: "Token inválido ou ausente." });
  }
};

module.exports = { verifyToken };
