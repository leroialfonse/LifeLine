const mongoose = require('mongoose');


const AppointmentSchema = new mongoose.Schema ({

    appType:{
        type: String,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Appointment", AppointmentSchema, 'appointments');
