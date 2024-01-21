function errorHandler(err, req, res, next) {
  console.error(err?.name || err);

  switch (err.name) {
    case 'SyntaxError':
      res.status(400).json({ message: 'Invalid JSON payload' });
      break;
    default:
      res.status(err.status || 500).json({
        message: err.message || 'Server Error',
      });
      break;
  }
}

module.exports = errorHandler;
