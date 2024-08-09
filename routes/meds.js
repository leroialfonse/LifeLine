const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const medsController = require("../controllers/meds");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Med Routes - simplified for now
router.get("/:id", ensureAuth, medsController.getMed);

router.post("/createMed", upload.single("file"), medsController.createMed);

// Should be edit med. Come back.
// router.get("/deleteMed/:id", dashboardController.deleteMed);

router.delete('/deleteMed/:id', medsController.deleteMed); //Deletes that selected item. 
module.exports = router;
