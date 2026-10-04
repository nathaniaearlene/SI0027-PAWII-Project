const express = require("express"); 
const router = express.Router(); 
const dosenController = require("../controllers/dosenController"); 

router.get("/", dosenController.getAll); 
router.get("/:id", dosenController.getById); 
router.post("/", dosenController.create);

module.exports = router;