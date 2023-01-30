const Comment = require("../models/Comment")

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("comment has been added!");
      res.redirect("/med/"+req.body);
    } catch (err) {
      console.log(err);
    }
  },
 
};
