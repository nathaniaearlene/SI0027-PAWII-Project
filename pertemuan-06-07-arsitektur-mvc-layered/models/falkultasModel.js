let fakultas = [ 
    { id: 1, nama: "Fakultas Ilmu Komputer" }, 
    { id: 2, nama: "Fakultas Ekonomi dan Bisnis" } 
]; 

function getAll() { return fakultas; } 
function getById(id) { return fakultas.find((f) => f.id === parseInt(id)); } 
function create(data) { 
    const newFakultas = { 
        id: fakultas.length + 1, 
        ...data 
    }; 
    fakultas.push(newFakultas); 
    return newFakultas; 
} 

module.exports = { getAll, getById, create };