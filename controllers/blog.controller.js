const Blog = require("../models/blogs");
const Category = require("../models/category");

const getAllBlogs = async (req, res, next) => {
  try {
    const getAllBlogs = await Blog.find({}).populate("user");
    res.status(200).json(getAllBlogs);
  } catch (error) {
    next(error);
  }
};

const getOneBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const one = await Blog.findOne({ _id: id }).populate("user");
    res.status(200).json(one);
  } catch (error) {
    next(error);
  }
};

const postBlog = async (req, res, next) => {
  try {
    const imageFile = req.file;
    const imageUrl = "image/" + imageFile.filename;
    const newBlog = { ...req.body, user: req.user.id, image: imageUrl };
    const createdBlog = await Blog.create(newBlog);
    await Category.findByIdAndUpdate(
      req.body.category,
      { $push: { blog: createdBlog._id } },
      { new: true }
    );

    res.status(201).json(createdBlog);
  } catch (error) {
    next(error);
  }
};

const putBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imageUrl = "image/" + req.file.filename;
    console.log("🚀 ~ putBlog ~ imageUrl:", imageUrl);
    const newBlog = { ...req.body, image: imageUrl };
    console.log("🚀 ~ putBlog ~ newBlog:", newBlog);
    const updateBlog = await Blog.findByIdAndUpdate({ _id: id }, newBlog, {
      new: true,
    });
    res.status(201).json(updateBlog);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    res.status(200).json(deleteBlog);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  getOneBlog,
  postBlog,
  putBlog,
  deleteBlog,
};
