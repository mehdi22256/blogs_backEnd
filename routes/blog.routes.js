const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  getOneBlog,
  putBlog,
  postBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const { authenticateToken } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.post("/", authenticateToken, upload.single("image"), postBlog);
router.delete("/:id", authenticateToken, deleteBlog);
router.put("/:id", authenticateToken, upload.single("image"), putBlog);

module.exports = router;
