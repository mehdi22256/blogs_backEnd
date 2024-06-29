const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  getOneCategory,
  putCategory,
  postCategory,
  deleteCategory,
} = require("../controllers/category.controller");

router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/", postCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", putCategory);

module.exports = router;
