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
const doctorRoutes = require("./routes/doctors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contacts");
const welcomeRoutes = require("./routes/welcome");
const dashboardRoutes = require("./routes/dashboard");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// getting th script from public to access the calendar functions.
// app.use(express.static(path.join(__dirname, "public")));

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
app.use("/doctors", doctorRoutes);
app.use("/contact", contactRoutes);
app.use("/welcome", welcomeRoutes);
// app.use("/directory", directoryRoutes);
app.use("/dashboard", dashboardRoutes); 



// Trying to get calendar as an html....
// This might work!! figure out CSS and javascripting now. 
app.get("/calendar",  (request, response)=> {
  response.sendFile(__dirname + "/calendar.html");
  
});


 





// ////////////////// Script for calendar? ???? /////////////////////////////////
// //////////////////////////////////////Remove this block if necessary/////////


// // Call the Date object of javascript to get date time, etc.
// const date = new Date();
// //check in the console... lol
// // console.log(date)



// const renderCalendar = () => {
//     date.setDate(1);
  
//     const monthDays = document.querySelector(".days");
  
//     const lastDay = new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDate();
  
//     const prevLastDay = new Date(
//       date.getFullYear(),
//       date.getMonth(),
//       0
//     ).getDate();
  
//     const firstDayIndex = date.getDay();
  
//     const lastDayIndex = new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDay();
  
//     const nextDays = 7 - lastDayIndex - 1;
// // Use Date.getMonth to get current month index in a 0 base index of the year. 
// const month = date.getMonth();
// // Turn that into an array of the year, that includes all the months.


//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

// // Set up a function to control the month prev - next arrows??? 
// // Html approach. changed in the EJS. 

// // Get the month title of the calendar and name it the month that it currently is. 
//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   // And get the date by selecting the p and change into the current date as a String. 
//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });



// renderCalendar();




















////////////////////////////////////////////////////////////////////////////////////////////
//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});


