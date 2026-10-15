// Mini Project - Pertemuan 9-10: Route Mahasiswa
// TODO 3: lengkapi routing di bawah agar memanggil handler controller yang sesuai.

const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// TODO: router.get('/', mahasiswaController.getAll);
router.get("/", mahasiswaController.getAll);

// TODO: router.get('/:id', mahasiswaController.getById);
router.get("/:id", mahasiswaController.getById);

// TODO: router.post('/', mahasiswaController.create);
router.post("/", mahasiswaController.create);

// TODO: router.put('/:id', mahasiswaController.update);
router.put("/:id", mahasiswaController.update);

// TODO: router.delete('/:id', mahasiswaController.remove);
router.delete("/:id", mahasiswaController.remove);

module.exports = router;
