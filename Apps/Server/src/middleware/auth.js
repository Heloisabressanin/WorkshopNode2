const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "AQWXCV.321", (err, decode) => {
      if (err) {
        res.status(401).json({
          message: "Authentication failed",
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } catch (err) {
    res.json({
      message: "Authentication failed",
    });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const loggedIn = window.localStorage.getItem("loggedIn");

  if (loggedIn === "true" && token) {
    // Vérification du token et des conditions d'accès
    jwt.verify(token, "AQWXCV.321", (err, decodedToken) => {
      if (err) {
        // Token invalide
        res.status(401).json({ message: "Token invalide" });
      } else {
        // Token valide, ajoute les données du token à la requête pour une utilisation ultérieure
        req.user = decodedToken;
        next();
      }
    });
  } else {
    // Pas de token fourni ou utilisateur non connecté
    res.status(401).json({ message: "Accès non autorisé" });
  }
};

module.exports = { auth, authenticateToken };