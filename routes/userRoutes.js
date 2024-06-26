const express = require("express");
const { getAllUserList, registerUser, deleteUser, getUserById, updateUser } = require("../controllers/userControllers");
const validateUser = require("../middlewares/validateUser");
const upload = require('../middlewares/uploadFile');
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/register_user', upload.array('files', 5), validateUser, registerUser);

// Protected routes (require authentication)
router.get("/get_all_users", verifyToken, getAllUserList);
router.get("/get_user_by_id/:id", verifyToken, getUserById);
router.put("/update_user/:id", verifyToken, upload.array('files', 5), validateUser, updateUser);
router.delete("/delete_user/:id", verifyToken, deleteUser);

module.exports = router;
