var express = require("express");
var router = express.Router();
var User = require("../model/User");
var auth = require("../module/auth");

/* GET users listing. */
router.get("/", function(req, res, next) {
  User.find({}, (err, data) => {
    res.json(data);
  });
});

/**
 * Register new user.
 */
router.post("/register", (req, res, next) => {
  // Regisztráljuk az új felhalsználót, a post body adatai alapján
  User.register(
    {
      username: req.body.username,
      email: req.body.email,
      address: req.body.address
    },
    req.body.password,
    function(err, newUser) {
      if (err) {
        // Regisztrációs hiba esetén.
        return res.json({ error: "Bad registration data." });
      }

      auth(req.body.username, req.body.password, (err) => {
        if (err) { return res.json(err); }
        delete req.body.password;
        req.body._id = newUser._id;
        res.json(req.body);
      });      
    }
  );
});

/**
 * Felhasználó beléptetése.
 */
router.post('/login', (req, res, next) => {
  auth(req.body.username, req.body.password, (err, user) => {
    if (err) { 
      return res.json(err); 
    }

    delete user.hash;
    delete user.salt;
    res.json({ user: user });
  });
});

module.exports = router;
