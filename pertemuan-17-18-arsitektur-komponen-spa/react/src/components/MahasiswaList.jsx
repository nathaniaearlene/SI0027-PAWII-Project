// Mini Project - Pertemuan 17-18: Komponen induk, merender banyak MahasiswaCard
// TODO 3: lengkapi komponen ini.

import MahasiswaCard from "./MahasiswaCard";

function MahasiswaList( {mahasiswa}/* TODO: destructure { mahasiswa } dari props */) {
  // TODO: jika mahasiswa.length === 0, kembalikan <p className="empty">Tidak ada mahasiswa yang cocok.</p>
  // Jika array mahasiswa kosong, tampilkan pesan kosong
  if (mahasiswa.length === 0) {
    return <p className="empty">Tidak ada mahasiswa yang cocok.</p>;
  }
  console.log(mahasiswa);

  return (
    <div className="mahasiswa-list">
      {/* TODO: gunakan mahasiswa.map() untuk merender satu <MahasiswaCard key={m.id} nama={m.nama} nim={m.nim} /> per item */}
      {mahasiswa.map((m) => (
        <MahasiswaCard 
        key={m.id} 
        nama={m.nama} 
        nim={m.nim} 
        />
      ))}
    </div>
  );
}

export default MahasiswaList;
