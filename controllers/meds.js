const cloudinary = require("../middleware/cloudinary");
const Med = require("../models/Med");
const Comment = require("../models/Comment");
// May not need this here.
// const Contact = require("../models/Contact");


module.exports = {
  getDashboard: async (req, res) => {
    try {
      const meds = await Med.find({ user: req.user.id });
      res.render("dashboard.ejs", { meds: meds, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getHome: async (req, res) => {
    try {
      let mongoose = require('mongoose')
      // const contact = await Contact.find({ userId: req.user.id });
      // console.log(req.user)
      res.render("home.ejs", { meds: req.meds, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getCabinet: async (req, res) => {
    try {
      const meds = await Med.find().sort({ createdAt: "desc" }).lean();
      res.render("cabinet.ejs", { meds: meds });
    } catch (err) {
      console.log(err);
    }
  },
  getMed: async (req, res) => {
    try {
      const med = await Med.findById(req.params.id);
      const comments = await Comment.find({ med: req.params.id }).sort({ createdAt: "desc" }).lean();
      res.render("med.ejs", { med: med, user: req.user, comments: comments, comment: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createMed: async (req, res) => {
    try {
      // Upload med image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Med.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        dosage: req.body.dosage,
        contact: req.body.contact,
        user: req.user.id,
      });
      console.log("Med has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteMed: async (req, res) => {
    try {
      // Find med by id
      let med = await Med.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(med.cloudinaryId);
      // Delete med from mogodb
      await Med.remove({ _id: req.params.id });
      console.log("Deleted Med");
      console.log(med.cloudinaryId)
      res.redirect("/cabinet");
    } catch (err) {
      res.redirect("/cabinet");
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find med by id
      let comment = await Comment.findById({
        _id: req.params.id
      });
      await Comment.remove({ _id: req.params.id, user: req.user });
      console.log("Deleted Med");
      res.redirect("back");
    } catch (err) {
      res.redirect("back");
    }
  },
  // createComment: async (req, res) => {
  //   try {
  //     await Comment.create({
  //       comment: req.body.comment,
  //       likes: 0,
  //       med: req.params.id,
  //     });
  //     console.log("comment has been added!");
  //     res.redirect("/med/id"+req.params.id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  //   deleteMed: async (req, res)=>{
  //     try{
  //   // Find contact by id
  //    let med = await Med.findById({ _id: req.params.id });
  //   // Delete the med from the db
  //     await Med.remove({ _id: req.params.id });

  //         // console.log(_id)
  //         console.log('Deleted');
  //     res.redirect("/dashboard");
  // }catch(err){ 
  //     res.redirect("/dashboard");
  //     }
  // },
};
