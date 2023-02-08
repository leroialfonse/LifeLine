const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const medsController = require("../controllers/meds");
const editMedController = require("../controllers/editMed");
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Med Routes - simplified for now
router.get("/:id", ensureAuth, medsController.getMed);

router.post("/createMed", upload.single("file"), medsController.createMed);

router.get("/deleteMed/:id", medsController.deleteMed);
router.get('/removeMed/:id', editMedController.deleteMed); //Deletes that selected item. 

router.get("/deleteComment/:id", commentsController.deleteComment);

router.delete("/deleteComment/:id", commentsController.deleteComment);
module.exports = router;
