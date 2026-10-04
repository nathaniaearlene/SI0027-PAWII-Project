let prodi = [ 
    { id: 1, nama: "Informatika", jenjang: "S1", fakultasId: 1 }, 
    { id: 2, nama: "Sistem Informasi", jenjang: "S1", fakultasId: 1 } 
]; 

function getAll() { return prodi; } 
function getById(id) { return prodi.find((p) => p.id === parseInt(id)); } 
function create(data) { 
    const newProdi = { id: prodi.length + 1, ...data }; 
    prodi.push(newProdi); 
    return newProdi; 
} 

module.exports = { getAll, getById, create };