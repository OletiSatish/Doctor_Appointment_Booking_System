const errorMiddleware = (err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
      message: err.message || 'Something went wrong',
    });
  };
  
  module.exports = errorMiddleware;
  