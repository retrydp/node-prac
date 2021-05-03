//@desc     Logs request to console
const logger = (req, res, next) => {
  req.hello = ' HEllo World';
  console.log(req.get('hello'));
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger;
