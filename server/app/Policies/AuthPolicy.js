const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    };


    const result = Joi.validate(req.body, schema);
    const errors = [];

    if (result.error) {
      result.error.details.forEach((detail) => {
        errors.push({
          // key: detail.path,
          error: detail.message
        });
        res.status(400).send({ errors });
      });
    } else {
      next();
    }
  }
};
