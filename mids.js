const i18n = require('i18n');
module.exports = {
  auth: function (roles) {
    return function (req, res, next) {
      let wToken = req.headers.authorization;
      if (wToken) {
        let token = wToken.split(' ')[1];
        if (token) {
          console.log(token);
          next();
        } else {
          res.status(403).json({ message: i18n.__('Forbidden') });
        }
      } else {
        res.status(403).json({ message: i18n.__('Forbidden') });
      }
    }
  }
};
