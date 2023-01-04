const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contacts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, contactController.getContact);

router.post("/createContact", contactController.createContact);

// original line
// router.delete("/deleteContact/:id", contactController.deleteContact);
// Trying to delete a contact where I am.
router.delete("/:id", contactController.deleteContact);


module.exports = router