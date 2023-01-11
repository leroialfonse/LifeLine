// May not need. Considering the use of linking a username to Stuff that I'm doing in the app. 

// const Contact = require('../models/Contact')
// const User = require('../models/User')

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getHome: async (req, res) => {
    try {
      let mongoose = require('mongoose')
      // const contact = await Contact.find({ userId: req.user.id });
      // console.log(req.user)
      res.render("welcome.ejs", {user: req.user});
    } catch (err) {
      console.log(err); 
    }
  },

  // May not need for html calendar routing. But, I still want auth.... come back to this. 
  getCalendar:  (req, res) => {
   try{ 
    res.render("calendar");
  } catch (err) {
    console.log(err);
  }
  },

};
