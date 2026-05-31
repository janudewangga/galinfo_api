const i18n = require('i18n');
const jwt = require('jsonwebtoken');
module.exports = {
  auth: function (roles) {
    return function (req, res, next) {
      let wToken = req.headers.authorization;
      if (wToken) {
        let token = wToken.split(' ')[1];
        if (token) {
          // console.log(token);
          // console.log(process.env.SECRET);
          let decodedToken = jwt.verify(token, process.env.SECRET, function (error, decodedToken) {
            // console.log(decodedToken);
            if (error) {
              res.status(403).json({ message: error });
            } else {
              req.user = decodedToken;
              if (roles) {
                if (!Array.isArray(roles)) {
                  roles = [roles];
                }
                if (roles.indexOf(req.user.role) > -1) {
                  next();
                } else {
                  res.status(403).json({ message: error });
                }
              } else {
                next();
              }
            }
          });
        } else {
          res.status(403).json({ message: i18n.__('Forbidden') });
        }
      } else {
        res.status(403).json({ message: i18n.__('Forbidden') });
      }
    }
  }
};
