const Comment = require("../models/Comment")

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        med: req.params.id,
      });
      console.log(req.body)

      console.log("comment has been added!");
      res.redirect("/med/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
 
};
