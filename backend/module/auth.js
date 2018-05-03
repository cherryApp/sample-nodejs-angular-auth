const User = require('../model/User');

module.exports = (username, password, callBack) => {
  var authenticate = User.authenticate();
  authenticate(username, password, function(err, result) {
    if (err || !result) {
      return callBack({ error: "User not athenticated." });
    }
    // Sikeres belépés esetén visszaküldjük a felhasználó adatait.
    callBack(null, result);
  });
};