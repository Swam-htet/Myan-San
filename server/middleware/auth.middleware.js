let jwt = require("jsonwebtoken");

async function verifyUserToken(req, res, next) {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Access Denied, unauthorized access" });
  } else {
    try {
      token = token.split(" ")[1];
      if (!token) {
        res.status(401).json({ message: "Access Denied, unauthorized access" });
      } else {
        let verifyUser = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!verifyUser) {
          res
            .status(401)
            .json({ message: "Access Denied, unauthorized access" });
        } else {
          res.user = verifyUser;
          next();
        }
      }
    } catch (e) {
      console.log("Error - ", e);
      res.status(401).json({ message: "Invalid Token" });
    }
  }
}

module.exports = {
  verifyUserToken,
};
