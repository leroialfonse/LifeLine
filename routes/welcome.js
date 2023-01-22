const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contacts");
const homeController = require("../controllers/home")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, contactController.getContact);
router.get("/welcome", ensureAuth, homeController.getHome);
// router.post("/createContact", contactController.createContact);


// router.delete("/deleteContact/:id", contactController.deleteContact);

module.exports = router