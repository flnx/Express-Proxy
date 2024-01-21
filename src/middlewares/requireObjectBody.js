const isObject = require('../utils/isObject');

function requireObjectBody(req, res, next) {
  if (!isObject(req.body)) {
    return res.status(400).json({ error: 'Missing JSON Data' });
  }

  next();
}

module.exports = requireObjectBody;
