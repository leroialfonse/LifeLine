const express = require("express")
const router = express.Router()
const editMedController = require("../controllers/editMed");
const medController = require("../controllers/meds");


router.get('/:id', editMedController.getEditMed); //go get the edit page with the item Id that we want to edit.
router.get('/removeMed/:id', editMedController.deleteMed); //Deletes that selected item. 
router.post('/updateMed/:id', editMedController.updateMed); // Updates the item using the data passed in from the form. 

module.exports = router