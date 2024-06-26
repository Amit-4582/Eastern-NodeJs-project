const express = require("express");
const { createNewRole, getAllRoleList, getRoleById, updateRole, deleteRole, attachUserRole, detachUserRole } = require("../controllers/roleControllers");

const router = express.Router();

router.post('/create_role', createNewRole);
router.get("/get_all_roles", getAllRoleList);
router.get("/get_role_by_id/:id", getRoleById);
router.put("/update_role/:id", updateRole);
router.delete("/delete_role/:id", deleteRole);

// ATTACHED AND DETACHED ROLE BY USER
router.post("/attach_user_role", attachUserRole);
router.post("/detach_user_role", detachUserRole);

module.exports = router;
