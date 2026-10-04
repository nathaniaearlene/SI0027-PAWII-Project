const prodiModel = require("../models/prodiModel"); 

exports.getAll = (req, res) => {
    res.status(200).json(prodiModel.getAll()); 
}; 

exports.getById = (req, res) => { 
    const data = prodiModel.getById(req.params.id); 
    if (!data) return res.status(404).json({ message: "Prodi tidak ditemukan" }); 
    res.status(200).json(data); 
}; 

exports.create = (req, res) => { 
    const newProdi = prodiModel.create(req.body); 
    res.status(201).json(newProdi); 
};