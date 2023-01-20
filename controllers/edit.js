const Contact = require('../models/Contact');

module.exports = {
    // remember: if you're talking to your db, pop an async to allow for the app to twait for responses.
    getEdit : async (req,res) => {
        const id= req.params.id
        console.log(id)
        try {
            const items = await ItemList.find()
            res.render("edit.ejs", {itemList: items, idItem: id})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    getEdit: async (req, res) => {
        try {
          let mongoose = require('mongoose')
          const contacts = await Contact.find();
          console.log(req.body)
          res.render("edit.ejs", {  contacts: contacts, user: req.user, });
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
               res.redirect('/');
            } catch (err) {
                if (err) return res.status(500).send(err)
                res.redirect('/');
            }
        }
    }