let dosen = [ 
    { id: 1, nama: "Dr. Budi Santoso", nip: "19850101", prodiId: 1 } 
]; 

function getAll() { return dosen; } 
function getById(id) { return dosen.find((d) => d.id === parseInt(id)); } 
function create(data) { 
    const newDosen = { id: dosen.length + 1, ...data }; 
    dosen.push(newDosen); 
    return newDosen; 
} 

module.exports = { getAll, getById, create };