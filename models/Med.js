const mongoose = require("mongoose");

const MedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: false,
  },
  dosage: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // TODO: link the doctors to the meds with Ref
  // prescribedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },


});

// Puts the data into a model that includes the model name, the schema itself, and the collection being written to.  If you don't specify the collection name as the third variable, then mongo will just name the collection as a plurality of the model name. (becomes "meds."),
module.exports = mongoose.model("Med", MedSchema);
