const Contact = require("../models/Contact");
const Comment = require("../models/Comment")
const Doctor = require("../models/Doctor");
const cloudinary = require("../middleware/cloudinary");



module.exports = {
getDirectory: async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: "desc" }).lean();
      res.render("directory.ejs", { contacts: contacts });
    } catch (err) {
      console.log(err);
    }
  },
getContact: async (req, res) => {
    try {
      let mongoose = require('mongoose')
      const contacts = await Contact.find({ userId: req.user.id });
      console.log(req.body)

      
      res.render("contact.ejs", {  contacts: contacts, user: req.user, });
    } catch (err) {
      console.log(err); 
    }
  },
createContact: async (req, res) => {
    try {
      console.log(req.body)

     await Contact.create({
        title: req.body.title,
        address: req.body.address,
        phone: req.body.phone,
        userId: req.user.id,
      });
      console.log("Contact has been added!");
      res.redirect("/contact");
    } catch (err) {
      console.log(err);
    }
  },
  deleteContact: async (req, res)=>{
    try{
  // Find contact by id
  // const contacts = await Contact.find({ userId: req.user.id });
  console.log(req.body)
  const contacts = await Contact.findOneAndDelete({ _id: req.params.id });

  
  console.log(req.id);

  // Delete the contact from the db
        // await Contact.remove({ _id: req.params.id });
        await Contact.remove({ _id: req.params.id });

        console.log(_id)
        console.log('Deleted');
        res.json('Deleted Contact');
    res.redirect("/contact");
}catch(err){ 
    res.redirect("/contact");
    }
},

}