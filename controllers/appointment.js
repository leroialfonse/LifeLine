const Appointment = require('../models/Appointment');

module.exports = {
    getCalendar: async  (req, res) => {
        // Trying to include events in the calendar
               try{
                 let mongoose = require('mongoose')
               const appointments = Appointment.findById()
               // Trying to include events in the calendar
               console.log(req.body)
               res.render("calendar.ejs", {user: req.user, appointments: appointments, appointments: appointments,});
         } catch (err) {
           console.log(err);
         }
       },
           
getAppointment: async (req, res) => {
try {
    let mongoose = require('mongoose')
    const appointments = await Appointment.find( {user: req.user.id, _id: req.params.id});
    console.log(req.body)
    res.render("calendar.ejs", {  appointments: appointments, appointments: appointment.hour, user: req.user, });
} catch (err) {
    console.log(err); 
}
},
createAppointment: async (req, res) => {
  try {
    console.log(req.body)
    await Appointment.create({
      appType: req.body.appType,
      hour: req.body.hour,
    }); 
    console.log('A new Appointment has been added!!');
    res.redirect('/calendar');

  } catch (err) {
    console.log(err);
  }
},

};




