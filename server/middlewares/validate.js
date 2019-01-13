
const REGEX = /^[2-9]+$/;

const validate = (req, res, next) => {
  const error = REGEX.exec(req.query.value);

  if (!error) {
    const response = {
      error: true,
      error_code: 400,
      message: "The value only can be a number between 2 and 9"
    };

    return res.status(400).json(response);
  }

  return next();
};

module.exports = validate;