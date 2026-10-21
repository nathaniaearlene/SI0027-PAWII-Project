// Mini Project - Pertemuan 11-12: Koneksi MongoDB, Routing & Error Handling
// TODO 3: lengkapi baris yang ditandai TODO di bawah ini.
// Jalankan dengan: npm install && npm start (setelah menyalin .env.example menjadi .env)

// TODO: require('express-async-errors') di baris PALING ATAS, sebelum require express
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/prodi", prodiRoutes);

// TODO: pasang errorHandler dengan app.use(errorHandler) di sini, PALING AKHIR
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  });
