var express = require("express");
var router = express.Router();
var User = require("../model/User");
var auth = require("../module/auth");
var passport = require('passport');

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

      passport.authenticate('local')(req, res, function () {
        res.json( {success: true} );
      });   
    }
  );
});

/**
 * Felhasználó beléptetése.
 */
router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log(req.sessionID);
    res.json({ sessionID: req.sessionID });
});

/**
 * Felhasználó kiléptetése.
 */
router.get('/logout', function(req, res) {
  req.logout();
  res.status(203).json({ success: 'logged out' });
});

module.exports = router;
