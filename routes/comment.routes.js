const express = require("express");
const router = express.Router();
const {
  getAllComments,
  getOneComment,
  putComment,
  postComment,
  deleteComment,
} = require("../controllers/comment.controller");
const { authenticateToken } = require("../middlewares/auth");
router.get("/", getAllComments);
router.get("/:id", getOneComment);
router.post("/", authenticateToken, postComment);
router.delete("/:id", authenticateToken, deleteComment);
router.put("/:id", authenticateToken, putComment);

module.exports = router;
