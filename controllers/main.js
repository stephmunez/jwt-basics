const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }
  res.send('Fake Login/Signup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.send({
    msg: 'Hello, John Doe',
    secret: `Here is your authorized data: ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
