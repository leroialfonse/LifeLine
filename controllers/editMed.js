const Med = require('../models/Med');
const meds = require('./meds');

module.exports = {
    // // remember: if you're talking to your db, pop an async to allow for the app to twait for responses.
    // getEdit : async (req,res) => {
    //     const id= req.params.id
    //     console.log(id)
    //     try {
    //         const contacts = await Contact.find()
    //         res.render("edit.ejs", {contacts: contacts, idContact: id})
    //     } catch (err) {
    //         if (err) return res.status(500).send(err)
    //     }
    // },
    getEditMed: async (req, res) => {
        const id = req.params.id
        console.log(id)
        try {
          let mongoose = require('mongoose')
          const meds = await Med.find();
          console.log(req.body)
          res.render("editMed.ejs", { meds: meds, user: req.user, idMed: id });
        } catch (err) {
          console.log(err); 
        }
      },
      deleteMed: async (req, res)=>{
        try{

          // from meds.js
  // // Find med by id
  // let med = await Med.findById({ _id: req.params.id });
  // // Delete image from cloudinary
  // await cloudinary.uploader.destroy(med.cloudinaryId);
  // // Delete med from db
  // await Med.remove({ _id: req.params.id });
  //         // from meds js

      // Find med by id
       let med = await Med.findByIdAndDelete({ _id: req.params.id });
       // Destroy the cloudinary image
       await cloudinary.uploader.destroy(med.cloudinaryId);
      // Delete the med from the db
        await Med.remove({ _id: req.params.id });
    
            // console.log(_id)
            console.log('Deleted');
        res.redirect("/cabinet");
    }catch(err){ 
        res.redirect("/cabinet");
        }
    },
    updateMed: async (req,res) => {
        const id = req.params.id
            try{
               await Med.findByIdAndUpdate(
                id, {
                    title: req.body.title,
                    dosage: req.body.dosage,
                },
               )
               res.redirect('/back');
            } catch (err) {
                if (err) return res.status(500).send(err)
                res.redirect('/back');
            }
        }
    }