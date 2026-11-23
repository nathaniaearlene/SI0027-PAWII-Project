// Mini Project - Pertemuan 21-22: Controlled form dengan validasi sisi klien
// TODO 1: lengkapi fungsi validate() dan handleSubmit() di bawah ini.

import { useState } from "react";

function validate(form) {
  const errors = {};
  // TODO: jika form.nama kosong (setelah di-trim), set errors.nama = 'Nama wajib diisi'
  if (!form.nama.trim()) errors.nama = 'Nama wajib diisi';
  // TODO: jika form.nim TIDAK cocok pola 7 digit angka (/^\d{7}$/), set errors.nim = 'NIM harus 7 digit angka'
  if (!/^\d{7}$/.test(form.nim)) errors.nim = 'NIM harus 7 digit angka';
  
  if (!form.kelas.trim()) errors.kelas = 'Kelas wajib diisi';
  return errors;
}

function MahasiswaForm({ onTambah }) {
  const [form, setForm] = useState({ nama: "", nim: "", kelas: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...form }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: panggil validate(form), simpan hasilnya ke variabel & ke setErrors()
    const validationErrors = validate(form);
    setErrors(validationErrors);

    // TODO: set touched jadi { nama: true, nim: true, kelas: true }
    setTouched({ nama: true, nim: true, kelas: true });

    // TODO: jika masih ada error (Object.keys(...).length > 0), hentikan dengan return
    if (Object.keys(validationErrors).length > 0) return;

    // TODO: panggil onTambah({ id: Date.now(), ...form })
    onTambah({ id: Date.now(), ...form });

    // TODO: kosongkan kembali form, touched, dan errors
    setForm({ nama: "", nim: "", kelas: "" });
    setTouched({});
    setErrors({});
  }

  return (
    <form className="mahasiswa-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nama && errors.nama && <span className="error">{errors.nama}</span>}
      </div>

      <div className="field">
        <input
          name="nim"
          placeholder="NIM (7 digit)"
          value={form.nim}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nim && errors.nim && <span className="error">{errors.nim}</span>}
      </div>

      <div className="field">
        <select
          name="kelas"
          value={form.kelas}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Pilih Kelas</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        {/* <input
          name="kelas"
          placeholder="Kelas"
          value={form.kelas}
          onChange={handleChange}
          onBlur={handleBlur}
        /> */}
        {touched.kelas && errors.kelas && <span className="error">{errors.kelas}</span>}
      </div>

      <div className="field">
        <input type="radio" name="jenisKelamin" value="Laki-laki" onChange={handleChange} /> Laki-laki
        <input type="radio" name="jenisKelamin" value="Perempuan" onChange={handleChange} /> Perempuan
      </div>
      
      <button type="submit" disabled={Object.keys(validate(form)).length > 0}>
        Tambah
      </button>
    </form>
  );
}

export default MahasiswaForm;
