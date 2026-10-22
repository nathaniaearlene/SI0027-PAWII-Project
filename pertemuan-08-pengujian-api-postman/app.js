const express = require('express'); 
const cors = require('cors'); 

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

// 1\. GET Penjelajah Ide 
app.get('/ideas', (req, res) => { 
    res.status(200).json([ 
        { id: '1', judul: 'Tantangan Harian: Desain Poster Minimalis', kategori: 'Desain Grafis' } 
    ]); 
}); 
// 2\. POST Tambah Tutorial 
app.post('/tutorials', (req, res) => { 
    res.status(201).json({ 
        id: 'tut-123', 
        judul: req.body.judul || 'Tutorial Baru', 
        kategori: req.body.kategori || 'Umum' 
    }); 
}); 
// 3\. GET Detail Tutorial 
app.get('/tutorials/:id', (req, res) => { 
    res.status(200).json({ 
        id: req.params.id, 
        judul: 'Membuat Vector Art Sederhana di Canva', 
        kategori: 'Desain Grafis' 
    }); 
}); 
// 4\. POST Buat Papan Koleksi 
app.post('/boards', (req, res) => {
     res.status(201).json({
        id: 'board-456', 
        namaBoard: req.body.namaBoard || 'Papan Inspirasi' 
    });
}); 
// 5\. GET Detail Papan Koleksi 
app.get('/boards/:id', (req, res) => { 
    res.status(200).json({ 
        id: req.params.id, 
        namaBoard: 'Inspirasi Desain UI/UX 2026' 
    }); 
}); 
// 6\. POST Unggah Pamer Karya 
app.post('/showcases', (req, res) => { 
    res.status(201).json({ 
        id: 'show-789', 
        judulKarya: req.body.judulKarya || 'Karya Saya' 
    }); 
}); 
// Jalankan Server 
const PORT = 3000; 
app.listen(PORT, () => { 
    console.log(`Server Creaflow berjalan di http://localhost:${PORT}`);
});