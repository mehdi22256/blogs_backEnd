const express = require("express");
const router = express.Router();
const upload = require("../middlewares/fileUpload");
const {
  getAllUsers,
  getOneUser,
  signUp,
  signIn,
  putUser,
  deleteUser,
} = require("../controllers/user.controller");
const { authenticateUser, authenticateToken } = require("../middlewares/auth");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/signup", upload.single("image"), signUp);
router.post("/signin", authenticateUser, signIn);
router.delete("/:id", authenticateToken, deleteUser);
router.put("/:id", authenticateToken, putUser);

module.exports = router;
