const Comment = require("../models/comments");

const getAllComments = async (req, res, next) => {
  try {
    const getAllComments = await Comment.find({}).populate("user");
    res.status(200).json(getAllComments);
  } catch (error) {
    next(error);
  }
};

const getOneComment = async (req, res, next) => {
  try {
    const { id } = req.body;
    const one = await Comment.findOne({ id }).populate("blog");
    res.status(200).json(one);
  } catch (error) {
    next(error);
  }
};

const postComment = async (req, res, next) => {
  try {
    const newComment = req.body;
    console.log("🚀 ~ postComment ~ newComment:", newComment);
    const createdComment = await Comment.create({
      ...newComment,
      user: req.user.id,
    });
    res.status(201).json(createdComment);
  } catch (error) {
    next(error);
  }
};

const putComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateComment);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteComment = await Comment.findByIdAndDelete(id);
    res.status(200).json(deleteComment);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllComments,
  getOneComment,
  postComment,
  putComment,
  deleteComment,
};
