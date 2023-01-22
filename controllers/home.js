
// May not need. Considering the use of linking a username to Stuff that I'm doing in the app. 

// const Contact = require('../models/Contact')
const User = require('../models/User');
const Med = require("../models/Med");


module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs" ,{user: req.user});  
  },
  getHome: async (req, res) => {
    try {
      let mongoose = require('mongoose')
      const meds = await Med.find();
      res.render("welcome.ejs", {meds: meds, user: req.user});
    } catch (err) {
      console.log(err); 
    }
  },

  // May not need for html calendar routing. But, I still want auth.... come back to this. 
  // getCalendar: async (req, res) => {
  //   console.log(req.body)
  //  try{ 
  //   res.render("calendar.ejs");
  //   console.log(req.body)
  // } catch (err) {
  //   console.log(err);
  // }
  // },

};