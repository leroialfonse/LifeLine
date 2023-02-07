const Contact = require('../models/Contact');
const contacts = require('./contacts');

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id
        console.log(id)
        try {
          let mongoose = require('mongoose')
          const contacts = await Contact.find( { userId: req.user.id });
          console.log(req.body)
          res.render("edit.ejs", {  contacts: contacts, user: req.user, idContact: id });
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
    deleteItem: async (req,res) => {
        const id = req.params.id
        try {
            const result = await ItemList.findByIdAndDelete(id)
            console.log(result)
                    res.redirect('back');
                } catch (err) {
                    if (err) return res.status(500).send(err)
                }
                },
    updateContact: async (req,res) => {
        const id = req.params.id
            try{
               await Contact.findByIdAndUpdate(
                id, {
                    title: req.body.title,
                    address: req.body.address,
                    phone: req.body.phone
                },
               )
               res.redirect('/contact');
            } catch (err) {
                if (err) return res.status(500).send(err)
                res.redirect('/contact');
            }
        }
    }