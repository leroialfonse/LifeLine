const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const medRoutes = require("./routes/meds");
const commentRoutes = require("./routes/comments");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contacts");
const homeRoutes = require("./routes/home");
const dashboardRoutes = require("./routes/dashboard");
const calendarRoutes = require("./routes/calendar");
const editRoutes = require("./routes/edit");
const editMedRoutes = require("./routes/editMed");
const PORT = process.env.PORT || 8900


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database 
// (When not using cyclic, just use connnect DB Remeber to re-enable when you are not using cyclic for hosting.)



//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "taco cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/med", medRoutes); //This is post routes for me. 
app.use("/comment", commentRoutes);
app.use("/contact", contactRoutes);
app.use("/home", homeRoutes);
app.use("/calendar", calendarRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/edit", editRoutes);
app.use("/editMed", editMedRoutes);







 
// Server Running (If not using cyclic.) Remeber to reenable if not using cyclic for hosting. 
// app.listen(process.env.PORT, () => {
//   console.log("Server is running, you betterr catch it!");
// });


// Connecting to the DB for Cyclic
connectDB().then(() => {
  app.listen(PORT,  () => {
      console.log("listening for requests!");
  })
});


