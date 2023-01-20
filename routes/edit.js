const express = require("express")
const router = express.Router()
const editController = require("../controllers/edit")

router.get('/:id', editController.getEdit) //go get the edit page with the item Id that we want to edit.
router.get('/remove/:id', editController.deleteContact) //Deletes that selected item. 
router.post('/update/:id', editController.updateContact) // Updates the item using the data passed in from the form. 

module.exports = router