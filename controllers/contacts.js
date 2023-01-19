const Contact = require("../models/Contact");
const Comment = require("../models/Comment")
const Doctor = require("../models/Doctor");
const cloudinary = require("../middleware/cloudinary");




module.exports = {
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
   let contact = await Contact.findById({ _id: req.params.id });
  //  await Contact.findByIdAndDelete({ _id: req.params.contactFromFile });
  // Delete the contact from the db
    await Contact.remove({ _id: req.params.id });

        // console.log(_id)
        console.log('Deleted');
    res.redirect("/contact");
}catch(err){ 
    res.redirect("/contact");
    }
},
// deleteContact: async (req, res)=>{
//   const id = req.params.id
//       try{
//     // Find contact by id
//       await Contact.findByIdAndDelete(id);
//       console.log(result)
//         res.redirect('/contact');
//       } catch (err) {
//         if (err) return res.status(500).send(err)
//       }
//     },
    //  await Contact.findByIdAndDelete({ _id: req.params.contactFromFile });
    // Delete the contact from the db
editContact: async (req, res)=>{
  const id = req.params.id
  console.log(req.params.id)
  try{
  
// Find contact by id
 await Contact.findByIdAndUpdate(
  id, {
      title: req.body.title,
      address: req.body.address,
      phone: req.body.phone
    });
//  await Contact.findByIdAndDelete({ _id: req.params.contactFromFile });
// Delete the contact from the db
  // /await Contact.updateOne({ _id: req.params.id });

      // console.log(_id)
      console.log('Updated');
  res.redirect("/contact");
}catch(err){ 
  if (err) return res.status(500).send(err)
  res.redirect("/contact");
  }
},

}