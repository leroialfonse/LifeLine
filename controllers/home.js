
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
      const meds = await Med.find( { userId: req.user.id });
      res.render("home.ejs", {meds: meds, med: meds, user: req.user});
    } catch (err) {
      console.log(err); 
    }
  },
};