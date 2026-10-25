const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message =
    err.message || 'Terjadi kesalahan internal pada server';

  // 1. Error validasi Mongoose
  if (err.name === 'ValidationError') {
    statusCode = 400;

    const errors = Object.values(err.errors).map(
      (error) => error.message
    );

    message = `Validasi gagal: ${errors.join(', ')}`;
  }

  // 2. Error format data atau ID
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Format nilai '${err.value}' tidak valid pada path ${err.path}`;
  }

  // 3. Error data duplikat
  if (err.code === 11000) {
    statusCode = 400;

    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];

    message = `Nilai '${value}' pada field ${field} sudah ada (duplikat)`;
  }

  res.status(statusCode).json({
    status: 'error',
    message,
  });
};

module.exports = errorHandler;
