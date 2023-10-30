const User = require('../models/User');
const Med = require("../models/Med");


module.exports = {

  getIndex: async (req, res) => {
    const user = await User.find({})
    res.render("index.ejs", { user: req.user });
  },
  getHome: async (req, res) => {
    try {
      let mongoose = require('mongoose')
      const meds = await Med.find({ user: req.user });
      res.render("home.ejs", { meds: meds, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};