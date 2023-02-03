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
  deleteComment: async (req, res) => {
    try {
      // Find med by id
     let comment = await Comment.findById({ 
      _id: req.params.id
      });
      await Comment.remove({_id: req.params.id });
      console.log("Deleted Med");
      res.redirect("back");
    } catch (err) {
      res.redirect("back");
    }
  },
 deleteComment: async(req,res) => {
  try {
   await Comment.remove({
    comment: req.body.comment,
    likes: 0,
    med: req.params.id,
    });
    console.log('Comment deleted');
    console.log(req.body)
    res.redirect("/med/"+req.params.id);
  } catch (err) {
    console.log(err);
  }
 }
};
