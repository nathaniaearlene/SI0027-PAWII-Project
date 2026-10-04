// Mini Project - Pertemuan 6-7: Menghubungkan Semua Layer
// TODO 4: gunakan express.json() dan hubungkan mahasiswaRoutes pada prefix /mahasiswa.
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const falkultasRoutes = require("./routes/falkultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const dosenRoutes = require("./routes/dosenRoutes");

// TODO: app.use(express.json());
app.use(express.json());

// TODO: app.use('/mahasiswa', mahasiswaRoutes);
app.use("/mahasiswa", mahasiswaRoutes);

app.use("/fakultas", falkultasRoutes);
app.use("/prodi", prodiRoutes);
app.use("/dosen", dosenRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
