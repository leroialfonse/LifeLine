

module.exports = {

  getCalendar:  (req, res) => {
       try{ 
        console.log(req.body)
        res.render("calendar.ejs", {user: req.user});
  } catch (err) {
    console.log(err);
  }
}
    };




