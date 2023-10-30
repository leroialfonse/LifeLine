const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  address: {
    type: String
  },
  phone: {
    type: String,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  userId: {
    type: String,
  },
  // TODO: Link the meds to the doctors with Ref.
  // perscriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Med' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
