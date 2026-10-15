// Mini Project - Pertemuan 9-10: Controller Mahasiswa
// TODO 2: lengkapi setiap handler agar memanggil Model Mongoose yang sesuai.

const Mahasiswa = require("../models/mahasiswaModel");

exports.getAll = async (req, res) => {
  // TODO: ambil seluruh data dengan Mahasiswa.find(), sertakan .populate('prodiId')
  // lalu kirim sebagai JSON
  try {
    const mahasiswa = await Mahasiswa.find().populate("prodiId");
    return res.status(200).json(mahasiswa);
  } catch (err) {
    return res.status(500).json({
      message: "Gagal mengambil data mahasiswa",
      error: err.message,
    });
  }
};

exports.getById = async (req, res) => {
  // TODO: ambil satu data dengan Mahasiswa.findById(req.params.id).populate('prodiId')
  // kirim 404 dengan { message: 'Tidak ditemukan' } jika tidak ada
  try {
     const mahasiswa = await Mahasiswa.findById(req.params.id)
      .populate("prodiId");

    if (!mahasiswa) {
      return res.status(404).json({
        message: "Tidak ditemukan",
      });
    }

    return res.status(200).json(mahasiswa);
  } catch (err) {
    return res.status(400).json({
      message: "ID mahasiswa tidak valid",
    });
  }
};

exports.create = async (req, res) => {
  // TODO: buat data baru dengan Mahasiswa.create(req.body), bungkus try/catch
  // kirim response dengan status 201, atau 400 jika validasi gagal
  try {
    const mahasiswa = await Mahasiswa.create(req.body);

    return res.status(201).json(mahasiswa);
  } catch (err) {
    return res.status(400).json({
      message: "Gagal menambahkan mahasiswa",
      error: err.message,
    });
  }
};

exports.update = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndUpdate(req.params.id, req.body,
  // { new: true, runValidators: true }), bungkus try/catch
  try {
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
      );

    if (!mahasiswa) {
      return res.status(404).json({
        message: "Tidak ditemukan",
      });
    }

    return res.status(200).json(mahasiswa);
  } catch (err) {
    return res.status(400).json({
      message: "Gagal memperbarui mahasiswa",
      error: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndDelete(req.params.id),
  // kirim status 204 jika berhasil, 404 jika tidak ditemukan
  try {
    const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);

    if (!mahasiswa) {
      return res.status(404).json({
        message: "Tidak ditemukan",
      });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({
      message: "Gagal menghapus mahasiswa",
      error: err.message,
    });
  }
};
