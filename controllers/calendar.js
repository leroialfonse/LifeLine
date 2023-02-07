const Appointment = require('../models/Appointment');

module.exports = {
getCalendar: async  (req, res) => {
 // Trying to include events in the calendar
        try{
          // let mongoose = require('mongoose')
        const appointments = await Appointment.find()
        // Trying to include events in the calendar
        console.log(req.body)
        res.render("calendar.ejs", {user: req.user, appointment: appointments, appointments: appointments,});
  } catch (err) {
    console.log(err);
  }
},
createAppointment: async (req,res) => {
  const newAppointment = new Appointment(
      {
          appType: req.body.appType,
          hour: req.body.hour
      }
  )
  try {
      await newAppointment.save()
      console.log(newAppointment)
      res.redirect("/")
  } catch(err) {
      if (err) return res.status(500).send(err)
      res.redirect("/")
  }
}

    };




