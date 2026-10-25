const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: [true, 'Judul tutorial wajib diisi'],
      trim: true,
    },
    kategori: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      trim: true,
    },
    tingkatKesulitan: {
      type: String,
      enum: ['Pemula', 'Menengah', 'Lanjutan'],
      default: 'Pemula',
    },
    estimasiWaktu: {
      type: String,
      required: [true, 'Estimasi waktu wajib diisi'],
    },
    deskripsi: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tutorial', tutorialSchema);
