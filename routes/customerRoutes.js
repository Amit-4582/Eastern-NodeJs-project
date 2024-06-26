const express = require("express");
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require("../controllers/customControllers");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/create_customer', verifyToken, checkRole(['Admin']), createCustomer);
router.get("/get_all_customers", verifyToken, checkRole(['Admin', 'Customer', 'Agent']), getAllCustomers);
router.get("/get_customer_by_id/:id", verifyToken, checkRole(['Admin', 'Customer', 'Agent']), getCustomerById);
router.put("/update_customer/:id", verifyToken, checkRole(['Admin']), updateCustomer);
router.delete("/delete_customer/:id", verifyToken, checkRole(['Admin']), deleteCustomer);

module.exports = router;
