const fakultasModel = require("../models/fakultasModel"); 
exports.getAll = (req, res) => { 
    res.status(200).json(fakultasModel.getAll()); 
};

exports.getById = (req, res) => {
    const data = fakultasModel.getById(req.params.id); 
    if (!data) 
        return res.status(404).json({ message: "Fakultas tidak ditemukan" }); 
    res.status(200).json(data); 
}; 

exports.create = (req, res) => {
    const newFakultas = fakultasModel.create(req.body); 
    res.status(201).json(newFakultas); 
};