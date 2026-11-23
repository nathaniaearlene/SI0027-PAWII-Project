// Mini Project - Pertemuan 21-22: menambahkan form bervalidasi (MahasiswaForm)
// Component tree (sudah lengkap dari Pertemuan 17-18/19-20): App (state) -> PageHeader, SearchBar, MahasiswaForm, MahasiswaList -> MahasiswaCard
// Routing ("/" & "/tentang") sudah lengkap - fokuskan TODO pada `MahasiswaForm.jsx`.

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaForm from "./components/MahasiswaForm";
import MahasiswaList from "./components/MahasiswaList";
import Tentang from "./components/Tentang";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DATA_AWAL = [
  { id: 1, nama: "Andi", nim: "2024001", kelas: "" },
  { id: 2, nama: "Budi", nim: "2024002", kelas: "" },
  { id: 3, nama: "Citra", nim: "2024003", kelas: "" },
];

function DaftarMahasiswaPage() {
  const [mahasiswa, setMahasiswa] = useState(DATA_AWAL);
  const [keyword, setKeyword] = useState("");

  function handleTambah(mahasiswaBaru) {
    setMahasiswa((prev) => [...prev, mahasiswaBaru]);
  }

  const mahasiswaTersaring = mahasiswa.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <MahasiswaForm onTambah={handleTambah} />
      <SearchBar keyword={keyword} onSearch={setKeyword} />
      <MahasiswaList mahasiswa={mahasiswaTersaring} />
      <footer className="env-footer">Terhubung ke: {API_BASE_URL}</footer>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <PageHeader judul="Daftar Mahasiswa" />
      <Routes>
        <Route path="/" element={<DaftarMahasiswaPage />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </div>
  );
}

export default App;
