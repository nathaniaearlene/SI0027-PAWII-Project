// Mini Project - Pertemuan 11-12: Middleware Error Handling Terpusat
// TODO 2: lengkapi middleware di bawah ini.
// Didaftarkan PALING AKHIR pada app.js, setelah seluruh route.

function errorHandler(err, req, res, next) {
  // TODO: tentukan status - gunakan err.status jika ada, jika tidak default 500
  const status = err.status || 500;

  // TODO: tentukan message - gunakan err.message jika ada, jika tidak pesan default
  res.status(status).json({ message: err.message || "Terjadi kesalahan" });
  // TODO: jika err.name === 'ValidationError' -> status 400
  // TODO: jika err.name === 'CastError' -> status 400, message "Format {err.path} tidak valid"
  // TODO: jika err.code === 11000 (duplicate key) -> status 400, message data unik sudah ada
  // TODO: kirim res.status(status).json({ message })
}

module.exports = errorHandler;
