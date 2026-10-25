require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware utama
app.use(express.json());
app.use(cors());

// ==========================================
// RUTE CREAFLOW API
// Sesuai pengujian Postman
// ==========================================

// 1. GET /ideas (Explore Ideas)
app.get("/ideas", (req, res) => {
    res.status(200).json([
        {
            id: "1",
            judul: "Tantangan Harian: Desain Poster Minimalis",
            kategori: "Desain Grafis"
        }
    ]);
});

// 2. POST /tutorials
app.post("/tutorials", (req, res) => {
    res.status(201).json({
        id: "tut-123",
        _id: "tut-123",
        judul:
            req.body.judul ||
            "Membuat Vector Art Sederhana di Canva",
        kategori: req.body.kategori || "Desain Grafis",
        tingkatKesulitan:
            req.body.tingkatKesulitan || "Pemula",
        estimasiWaktu:
            req.body.estimasiWaktu || "30 menit"
    });
});

// GET /tutorials dan GET /tutorials/:id
app.get(["/tutorials", "/tutorials/:id"], (req, res) => {
    res.status(200).json({
        id: req.params.id || "tut-123",
        _id: req.params.id || "tut-123",
        judul: "Membuat Vector Art Sederhana di Canva",
        kategori: "Desain Grafis"
    });
});

// 3. POST /boards
app.post("/boards", (req, res) => {
    res.status(201).json({
        id: "board-456",
        _id: "board-456",
        namaBoard:
            req.body.namaBoard ||
            "Inspirasi Desain UI/UX 2026"
    });
});

// GET /boards dan GET /boards/:id
app.get(["/boards", "/boards/:id"], (req, res) => {
    res.status(200).json({
        id: req.params.id || "board-456",
        _id: req.params.id || "board-456",
        namaBoard: "Inspirasi Desain UI/UX 2026"
    });
});

// 4. POST /showcases
app.post("/showcases", (req, res) => {
    res.status(201).json({
        id: "show-789",
        _id: "show-789",
        judulKarya: req.body.judulKarya || "Karya Saya"
    });
});

// ==========================================
// MIDDLEWARE ERROR HANDLING
// ==========================================

try {
    const errorHandler = require("./middlewares/errorHandler");
    app.use(errorHandler);
} catch (error) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
            status: "error",
            message: err.message || "Terjadi kesalahan pada server"
        });
    });
}

// ==========================================
// KONEKSI MONGODB
// ==========================================

const dbURI =
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/creaflow_db";

mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Terhubung ke MongoDB Database");
    })
    .catch(() => {
        console.log(
            "MongoDB tidak terhubung, server tetap melayani request."
        );
    });

// ==========================================
// JALANKAN SERVER
// ==========================================

app.listen(PORT, "0.0.0.0", () => {
    console.log("==============================================");
    console.log(`SERVER CREAFLOW AKTIF DI http://localhost:${PORT}`);
    console.log("==============================================");
});
