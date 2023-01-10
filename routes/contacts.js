const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contacts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, contactController.getContact);

router.post("/createContact", ensureAuth, contactController.createContact);

router.put("/editContact/:id", contactController.editContact);

router.delete("/deleteContact/:id", contactController.deleteContact);


module.exports = router