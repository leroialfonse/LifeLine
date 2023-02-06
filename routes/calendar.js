const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const calendarController = require("../controllers/calendar");
const appointmentController = require("../controllers/appointment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, calendarController.getCalendar);
router.get("/:id", ensureAuth, appointmentController.getAppointment);

router.post("/createAppointment", ensureAuth, appointmentController.createAppointment);

module.exports = router