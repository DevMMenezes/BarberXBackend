const jwt = require("jsonwebtoken");
exports.VerifyToken = (req, res, next) => {
  try {
    const BearerHeader = req.headers.authorization;
    if (typeof BearerHeader !== "undefined") {
      const BearerPrefix = BearerHeader.split(" ")[0];
      if (BearerPrefix.toUpperCase() !== "BEARER") {
        return res
          .status(403)
          .json({ error: "Prefixo do token não informado" });
      }

      const BearerSplited = BearerHeader.split(" ")[1];
      jwt.verify(BearerSplited, process.env.JWTTOKEN);
      next();
    } else {
      res.status(403).json({ error: "Token não encontrado" });
    }
  } catch (error) {
    res.sendStatus(403).json({ auth: false, error: error });
  }
};
