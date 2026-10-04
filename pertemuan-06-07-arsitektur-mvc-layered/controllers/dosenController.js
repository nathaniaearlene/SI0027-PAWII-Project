const dosenModel = require("../models/dosenModel");
exports.getAll = (req, res) => {
    res.status(200).json(dosenModel.getAll()); 
}; 

exports.getById = (req, res) =>; {
    const data = dosenModel.getById(req.params.id); 
    if (!data) return res.status(404).json({ message: "Dosen tidak ditemukan" }); 
    res.status(200).json(data); 
}; 

exports.create = (req, res) => {
    const newDosen = dosenModel.create(req.body); 
    res.status(201).json(newDosen); 
};