const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const calendarController = require("../controllers/calendar");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, calendarController.getCalendar);

// router.post("/createContact", contactController.createContact);


// router.delete("/deleteContact/:id", contactController.deleteContact);

module.exports = router