const Category = require("../models/category");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const generateToken = (userCredentials) => {
//   const payload = {
//     id: userCredentials._id,
//     username: userCredentials.username,
//     email: userCredentials.email,
//     fullName: userCredentials.fullName,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY);
//   return token;
// };

const getAllCategories = async (req, res, next) => {
  try {
    const getAllCategories = await Category.find().populate("blog");
    res.status(200).json(getAllCategories);
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const one = await Category.findOne({ _id: id }).populate("blog");

    res.status(200).json(one);
  } catch (error) {
    next(error);
  }
};

const postCategory = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const createdCategory = await Category.create(newCategory);
    res.status(201).json(createdCategory);
  } catch (error) {
    next(error);
  }
};

const putCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.status(200).json(deleteCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  postCategory,
  putCategory,
  deleteCategory,
};
