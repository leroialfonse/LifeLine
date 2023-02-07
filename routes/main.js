const express = require("express");
const router = express.Router();
const app = express()
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const medsController = require("../controllers/meds");
const contactController = require("../controllers/contacts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, homeController.getHome);
router.get("/dashboard", ensureAuth, medsController.getDashboard);
router.get("/meds", ensureAuth, medsController.getMed);
router.get("/cabinet", ensureAuth, medsController.getCabinet);
router.get("/contact", ensureAuth, contactController.getContact);

// app.get("/calendar", ensureAuth, homeController.getCalendar);
//Trying to get html calendar. Will need to move to EJS and give auth. All other routes have auth. 
// app.get("/calendar", ensureAuth, authController.getCalendar);

// router.get("/directory", ensureAuth, contactController.getDirectory);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);


module.exports = router;
