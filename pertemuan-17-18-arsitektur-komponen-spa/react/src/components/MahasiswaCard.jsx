// Mini Project - Pertemuan 17-18: Komponen anak, menerima data lewat props
// TODO 1: lengkapi komponen agar menerima props { nama, nim } dan menampilkannya.
import MahasiswaCard from "./MahasiswaCard";

  function MahasiswaCard({mahasiswa}/* TODO: destructure { nama, nim } dari props */) {
  return (
    <div className="card">
      {/* TODO: tampilkan nama di dalam <h3> */}
      <h3>(nama)</h3>
      {/* TODO: tampilkan "NIM: <nim>" di dalam <p> */}
      <p>NIM: {nim}</p>
    </div>
  );
}

export default MahasiswaCard;
