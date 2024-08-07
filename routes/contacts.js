const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contacts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, contactController.getContact);
// Trying out mayanwolfe solution for deleting contats
router.get('/remove/:id', contactController.deleteContact)
router.post("/contact/createContact", ensureAuth, contactController.createContact);

router.post("/editContact/:id", contactController.editContact);

router.delete("/deleteContact/:id", contactController.deleteContact);


module.exports = router