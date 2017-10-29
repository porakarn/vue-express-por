const UserModel = require('../../database/Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

// Token setup
function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: Math.floor(new Date().getTime() / 1000) + (7 * 24 * 60 * 60)
  });
}

module.exports = {
  /**
   * Register method
   */
  register(req, res, next) {
    const user = new UserModel({
      email: req.body.email,
      password: req.body.password
    });

    UserModel.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      // Check if email is avaible
      if (existingUser) {
        // Save error message
        const errors = [];
        errors.push({
          error: 'Email exists'
        });

        return res.status(400).send({ errors });
      }
      user.save((err) => {
        if (err) { return next(err); }
        // Registred successfully
        return res.send({
          user: user.toJSON(),
          token: generateToken(user.toJSON())
        });
      });
    });
  },

  /**
   * Login method
   */
  login(req, res, next) {
    UserModel.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      // Check if user exists
      const errors = [];

      // Check if email is valid
      if (!existingUser) {
        errors.push({
          error: 'User does not exist (email)'
        });
        return res.status(400).send({ errors });
      }

      // Check if password is valid
      bcrypt.compare(req.body.password, existingUser.password, (err, response) => {
        // Something goes wrong
        if (err) {
          errors.push({
            error: 'Something goes wrong'
          });
          return res.status(400).send({ errors });
        }
        // Successfuly logged in
        if (response) {
          return res.send({
            user: existingUser.toJSON(),
            token: generateToken(existingUser.toJSON())
          });
        }
        // Password is wrong
        errors.push({
          error: 'Password is incorect'
        });
        return res.status(400).send({ errors });
      });
    });
  }
};
